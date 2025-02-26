require('dotenv').config(); // Load environment variables from .env file
const Web3 = require('web3');

// Connect to the Ethereum blockchain
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.RPC_URL));

// Example: Fetch the latest Ethereum block number
async function main() {
    try {
        const latestBlock = await web3.eth.getBlockNumber();
        console.log("Latest Block Number:", latestBlock);
    } catch (err) {
        console.error("Error fetching block number:", err);
    }
}

// Start the bot
main();
