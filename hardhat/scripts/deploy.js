
const hre = require("hardhat");

async function main() {

  const contract = await hre.ethers.getContractFactory("DIDSSI");
  const deployedContract = await contract.deploy();

  await deployedContract.deployed();

  console.log("DIDSSI Smart Contract deployed at:", deployedContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
