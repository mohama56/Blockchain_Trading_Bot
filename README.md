# 🚀 Blockchain Sniping Bot

## Overview
The **Blockchain Sniping Bot** is an automated trading tool designed for executing high-speed token purchases on decentralized exchanges (DEXs) such as **Serum** and **Raydium** (Solana network). It identifies newly listed tokens and executes trades automatically to gain an early advantage in DeFi trading.

## Features
- **Automated Token Monitoring** - Detects and tracks new tokens in real-time using Jupiter API.
- **Rug Pull Protection** - Performs security checks to filter out high-risk tokens.
- **High-Speed Trading Execution** - Automates trade execution on supported DEXs.
- **Customizable Configuration** - Adjust slippage, buy amounts, and execution strategies.
- **Web3 Integration** - Uses Solana Web3.js for transaction handling.

## Installation
### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14+ recommended)
- **npm** or **yarn**
- **A Solana-compatible wallet**

### Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/mohama56/blockchain-sniping-bot.git
   cd blockchain-sniping-bot
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```

## Environment Variables
This project requires an `.env` file to function correctly. Ensure you create an `.env` file in the root directory and include the following variables:
```
SOLANA_RPC=<YOUR_SOLANA_RPC_URL>
WALLET_PRIVATE_KEY=<YOUR_WALLET_PRIVATE_KEY>
```
**Important:** Never share your `.env` file or expose your private key publicly.

## Usage
### Running the Bot
To start the bot, run:
```sh
node index.js
```

### How It Works
1. **Token Monitoring** - The bot fetches new tokens from Jupiter API.
2. **Security Check** - Runs rug pull detection using Solana's blockchain data.
3. **Trade Execution** - If a token is deemed safe, the bot executes a trade.

## Project Structure
```
blockchain-sniping-bot/
├── bot.js              # Connects to Ethereum blockchain (if applicable)
├── config.js           # Configurations and environment variables
├── index.js            # Main execution file
├── monitor.js          # Monitors new token listings
├── pool-sniper.js      # Tracks and logs token purchases
├── rugChecker.js       # Checks for potential rug pulls
├── tradeExecutor.js    # Executes token trades
├── package.json        # Project dependencies
└── .env                # Environment variables (excluded from GitHub)
```

## License
This project is licensed under the **ISC License**. See the LICENSE file for details.

## Disclaimer
This bot is intended for educational and research purposes only. Use it at your own risk, as cryptocurrency trading carries significant financial risks.

