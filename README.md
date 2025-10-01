A configurable Node.js bot for simulating realistic on-chain activity. This tool is designed for developers and airdrop farmers looking to build a transaction history on EVM-compatible blockchains.

## Features

- **Multi-Mode Operation**: Deploy unique ERC-20 tokens or simple contracts.
- **Stealth Features**: Includes wallet shuffling and randomized delays to mimic human behavior.
- **Configurable**: All settings, including private keys and RPC URLs, are managed via a secure `.env` file.

## How to Use

### 1. Setup
Clone the repository and install dependencies:
```bash
git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
cd YOUR_REPO_NAME
npm install ethers dotenv
```

### 2. Configure
Create a `.env` file in the project folder and add your configuration:
```env
# The RPC URL for the network (e.g., Base, Sepolia)
RPC_URL="YOUR_RPC_URL_HERE"

# The address of the contract to interact with
CONTRACT_ADDRESS="YOUR_DEPLOYED_CONTRACT_ADDRESS_HERE"

# A comma-separated list of your private keys (NO SPACES)
PRIVATE_KEYS="0xkey1,0xkey2,0xkey3"
```

### 3. Run
Execute the bot from your terminal:
```bash
node bot.js
```

## Disclaimer
This tool is for educational purposes. Always handle your private keys with extreme care and never share them.
