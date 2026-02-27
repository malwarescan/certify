const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  // 1. Deploy VerificationRegistry
  const Registry = await hre.ethers.getContractFactory("VerificationRegistry");
  const registry = await Registry.deploy();
  await registry.waitForDeployment();
  const registryAddress = await registry.getAddress();
  console.log("VerificationRegistry deployed to:", registryAddress);

  // 2. Deploy CertificateNFT
  const NFT = await hre.ethers.getContractFactory("CertificateNFT");
  const nft = await NFT.deploy(registryAddress, "Certificate.now", "CERT");
  await nft.waitForDeployment();
  const nftAddress = await nft.getAddress();
  console.log("CertificateNFT deployed to:", nftAddress);

  // 3. Grant REGISTRY_WRITER to CertificateNFT
  const REGISTRY_WRITER = await registry.REGISTRY_WRITER();
  await registry.grantRole(REGISTRY_WRITER, nftAddress);
  console.log("Granted REGISTRY_WRITER to CertificateNFT");

  // 4. Grant BRAND_ROLE to deployer (for testing)
  const BRAND_ROLE = await nft.BRAND_ROLE();
  await nft.grantRole(BRAND_ROLE, deployer.address);
  console.log("Granted BRAND_ROLE to deployer");

  console.log("\n--- Deployment Summary ---");
  console.log("VerificationRegistry:", registryAddress);
  console.log("CertificateNFT:", nftAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
