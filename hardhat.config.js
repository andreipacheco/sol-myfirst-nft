require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  networks: {
    hardhat: {},
    polygon: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.YOUR_INFURA_PROJECT_ID}`,
      accounts: [`0x${process.env.YOUR_PRIVATE_KEY}`]
    }
  }
};
