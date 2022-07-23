
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

// smart contract deployed at 0xF82d223E42dEB85774EA5bF53D1c19F661B9030E