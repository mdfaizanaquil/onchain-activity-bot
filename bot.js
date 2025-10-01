const { ethers } = require("ethers");
require("dotenv").config();

// ====== LOAD CONFIG FROM .ENV ======
const RPC_URL = process.env.RPC_URL;
const PRIVATE_KEYS = process.env.PRIVATE_KEYS ? process.env.PRIVATE_KEYS.split(",") : [];
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

if (!RPC_URL || PRIVATE_KEYS.length < 10 || !CONTRACT_ADDRESS) {
  console.error("❌ You must provide an RPC_URL, a CONTRACT_ADDRESS, and at least 10 PRIVATE_KEYS in the .env file.");
  process.exit(1);
}

// ABI for the mint function
const contractAbi = ["function mint(address to, uint256 amount) public"];

// ====== HELPER ======
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

// ====== MAIN FUNCTION ======
async function main() {
  console.log(`🚀 Starting interaction bot for contract: ${CONTRACT_ADDRESS}`);
  console.log(`Will perform interactions from ${PRIVATE_KEYS.length} unique wallets.`);

  for (let i = 0; i < PRIVATE_KEYS.length; i++) {
    const privateKey = PRIVATE_KEYS[i];
    const provider = new ethers.JsonRpcProvider(RPC_URL);
    const wallet = new ethers.Wallet(privateKey, provider);

    console.log(`\n--- [Wallet ${i + 1}/${PRIVATE_KEYS.length}] Using ${wallet.address} ---`);

    try {
      const contract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi, wallet);

      console.log("📞 Calling mint function to create an 'active' transaction...");
      // Mint 1 token to this wallet's own address
      const tx = await contract.mint(wallet.address, 1);
      await tx.wait();

      console.log(`✅ Success! Transaction hash: ${tx.hash}`);

    } catch (err) {
      console.error(`❌ Error for wallet ${wallet.address}:`, err.message);
    }

    if (i < PRIVATE_KEYS.length - 1) {
      const waitTime = Math.floor(Math.random() * 20) + 10; // Wait 10-30 seconds
      console.log(`⏳ Waiting ${waitTime}s before next wallet...`);
      await sleep(waitTime * 1000);
    }
  }

  console.log("\n🎉 All wallets have successfully interacted with the contract. Your contract is now 'active' with 10+ unique wallets.");
}

main();