
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

// smart contract deployed at 0x6b8dD9ffc097fba1676C869dE0D3517fd3c5179B