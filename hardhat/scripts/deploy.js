
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

// smart contract deployed at 0x3b0F9f88d7a3a25E04f53E9856e59d0435eE4733