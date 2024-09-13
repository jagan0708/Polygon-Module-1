// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MyCollectibles.sol/MyCollectibles.json");

const tokenAddress = "0x6893387d50B7225Cb9a179Aaf58AB87296Ad0192"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x580b9eCF85c98D9a5DD168237F457A7Fca759d40"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log(" you now have: 05 tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
