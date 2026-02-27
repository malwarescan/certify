// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IVerificationRegistry {
    /**
     * @notice Register NFC tag hash to token ID binding
     * @dev Only callable by authorized minter (CertificateNFT)
     */
    function register(bytes32 nfcTagHash, uint256 tokenId) external;

    /**
     * @notice Verify NFC tag and return associated token + authenticity
     * @return tokenId The NFT token ID if authentic, 0 otherwise
     * @return isAuthentic True if NFC is registered and not revoked
     */
    function verify(bytes32 nfcTagHash) external view returns (uint256 tokenId, bool isAuthentic);

    /**
     * @notice Revoke NFC binding (lost/stolen tag)
     * @dev Only admin. Token remains valid; NFC can no longer verify.
     */
    function revoke(bytes32 nfcTagHash) external;
}
