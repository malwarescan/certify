// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * @title VerificationRegistry
 * @notice NFC tag hash → Token ID mapping for instant verification
 * @dev Single source of truth for NFC authenticity. CertificateNFT is the only writer.
 */
contract VerificationRegistry is AccessControl {
    bytes32 public constant REGISTRY_WRITER = keccak256("REGISTRY_WRITER");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    mapping(bytes32 => uint256) public nfcToTokenId;
    mapping(uint256 => bytes32) public tokenToNfc;
    mapping(bytes32 => bool) public revoked;

    event NFCRegistered(bytes32 indexed nfcTagHash, uint256 indexed tokenId);
    event NFCRevoked(bytes32 indexed nfcTagHash, uint256 indexed tokenId);

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
    }

    /**
     * @notice Register NFC hash to token binding. Only CertificateNFT.
     */
    function register(bytes32 nfcTagHash, uint256 tokenId) external onlyRole(REGISTRY_WRITER) {
        require(nfcTagHash != bytes32(0), "Invalid NFC hash");
        require(nfcToTokenId[nfcTagHash] == 0, "NFC already registered");

        nfcToTokenId[nfcTagHash] = tokenId;
        tokenToNfc[tokenId] = nfcTagHash;

        emit NFCRegistered(nfcTagHash, tokenId);
    }

    /**
     * @notice Verify NFC tag. Returns token ID and authenticity.
     */
    function verify(bytes32 nfcTagHash) external view returns (uint256 tokenId, bool isAuthentic) {
        tokenId = nfcToTokenId[nfcTagHash];
        isAuthentic = tokenId != 0 && !revoked[nfcTagHash];
    }

    /**
     * @notice Revoke NFC (e.g., lost/stolen tag). Admin only.
     */
    function revoke(bytes32 nfcTagHash) external onlyRole(ADMIN_ROLE) {
        uint256 tokenId = nfcToTokenId[nfcTagHash];
        require(tokenId != 0, "NFC not registered");

        revoked[nfcTagHash] = true;
        emit NFCRevoked(nfcTagHash, tokenId);
    }

    /**
     * @notice Convenience: get token ID by NFC hash
     */
    function getTokenByNFC(bytes32 nfcTagHash) external view returns (uint256) {
        return nfcToTokenId[nfcTagHash];
    }
}
