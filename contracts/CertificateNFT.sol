// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "./IVerificationRegistry.sol";

/**
 * @title CertificateNFT
 * @notice ERC-721 NFT representing blockchain-secured luxury item certificates
 * @dev Integrates with VerificationRegistry for NFC binding. Upgrade to ERC721A for gas-optimized batch minting.
 */
contract CertificateNFT is ERC721, ERC2981, AccessControl, ReentrancyGuard {
    bytes32 public constant BRAND_ROLE = keccak256("BRAND_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    IVerificationRegistry public immutable verificationRegistry;

    struct CertificateData {
        bytes32 nfcTagHash;
        bytes32 metadataHash;
        uint64 mintedAt;
        bool isVerified;
        address brand;
    }

    mapping(uint256 => CertificateData) public certificates;

    event CertificateMinted(
        uint256 indexed tokenId,
        address indexed to,
        bytes32 nfcTagHash,
        address indexed brand
    );

    constructor(
        address _registry,
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {
        verificationRegistry = IVerificationRegistry(_registry);
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
    }

    /**
     * @notice Mint a single certificate with NFC binding
     * @param to Recipient address
     * @param nfcTagHash keccak256(uid, certId, chainId) - hashed NFC identifier
     * @param metadataHash IPFS content hash (bytes32)
     * @param royaltyRecipient Address to receive secondary sale royalties
     * @param royaltyBps Royalty in basis points (e.g., 250 = 2.5%)
     */
    function mintWithNFC(
        address to,
        bytes32 nfcTagHash,
        bytes32 metadataHash,
        address royaltyRecipient,
        uint96 royaltyBps
    ) external onlyRole(BRAND_ROLE) nonReentrant returns (uint256) {
        _tokenIdCounter++;
        uint256 tokenId = _tokenIdCounter;

        _safeMint(to, tokenId);

        certificates[tokenId] = CertificateData({
            nfcTagHash: nfcTagHash,
            metadataHash: metadataHash,
            mintedAt: uint64(block.timestamp),
            isVerified: true,
            brand: msg.sender
        });

        verificationRegistry.register(nfcTagHash, tokenId);

        if (royaltyBps > 0) {
            _setTokenRoyalty(tokenId, royaltyRecipient, royaltyBps);
        }

        emit CertificateMinted(tokenId, to, nfcTagHash, msg.sender);

        return tokenId;
    }

    /**
     * @notice Batch mint certificates (gas-optimized for brand onboarding)
     */
    function batchMintWithNFC(
        address[] calldata recipients,
        bytes32[] calldata nfcTagHashes,
        bytes32[] calldata metadataHashes,
        address royaltyRecipient,
        uint96 royaltyBps
    ) external onlyRole(BRAND_ROLE) nonReentrant returns (uint256[] memory) {
        require(
            recipients.length == nfcTagHashes.length && recipients.length == metadataHashes.length,
            "Length mismatch"
        );
        require(recipients.length <= 50, "Batch limit 50");

        uint256[] memory tokenIds = new uint256[](recipients.length);

        for (uint256 i = 0; i < recipients.length; i++) {
            _tokenIdCounter++;
            uint256 tokenId = _tokenIdCounter;
            _safeMint(recipients[i], tokenId);
            bytes32 nfcHash = nfcTagHashes[i];

            certificates[tokenId] = CertificateData({
                nfcTagHash: nfcHash,
                metadataHash: metadataHashes[i],
                mintedAt: uint64(block.timestamp),
                isVerified: true,
                brand: msg.sender
            });

            verificationRegistry.register(nfcHash, tokenId);

            if (royaltyBps > 0) {
                _setTokenRoyalty(tokenId, royaltyRecipient, royaltyBps);
            }

            tokenIds[i] = tokenId;
            emit CertificateMinted(tokenId, recipients[i], nfcHash, msg.sender);
        }

        return tokenIds;
    }

    function totalSupply() public view returns (uint256) {
        return _tokenIdCounter;
    }

    uint256 private _tokenIdCounter;

    /**
     * @notice Returns IPFS URI for token metadata
     */
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(tokenId != 0 && tokenId <= _tokenIdCounter, "URIQueryForNonexistentToken");

        bytes32 hash = certificates[tokenId].metadataHash;
        return string(abi.encodePacked("ipfs://", _bytes32ToBase58(hash)));
    }

    /**
     * @notice Verify certificate by NFC hash (delegates to registry)
     */
    function verifyByNFC(bytes32 nfcTagHash) external view returns (uint256 tokenId, bool isAuthentic) {
        return verificationRegistry.verify(nfcTagHash);
    }

    function _bytes32ToBase58(bytes32 hash) internal pure returns (string memory) {
        // Simplified: In production, use proper base58 encoding (e.g., IPFS multihash)
        // For now return hex - replace with base58 for IPFS compatibility
        return _toHexString(abi.encodePacked(hash));
    }

    function _toHexString(bytes memory data) internal pure returns (string memory) {
        bytes memory alphabet = "0123456789abcdef";
        bytes memory str = new bytes(2 + data.length * 2);
        str[0] = "0";
        str[1] = "x";
        for (uint256 i = 0; i < data.length; i++) {
            str[2 + i * 2] = alphabet[uint8(data[i] >> 4)];
            str[3 + i * 2] = alphabet[uint8(data[i] & 0x0f)];
        }
        return string(str);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC2981, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
