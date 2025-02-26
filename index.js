require("dotenv").config();
const { monitorTokens } = require("./monitor");
const { checkRugPull } = require("./rugChecker");
const { executeTrade } = require("./tradeExecutor");

async function main() {
  console.log("Starting Solana Trading Bot...");
  const newTokens = await monitorTokens();

  for (const token of newTokens) {
    console.log(`Checking rug status for token: ${token.name} (${token.address})`);
    const isSafe = await checkRugPull(token.address);

    if (isSafe) {
      console.log(`Token ${token.name} is safe. Proceeding to trade.`);
      await executeTrade(token.address);
    } else {
      console.log(`Token ${token.name} failed rug check. Skipping.`);
    }
  }
}

main().catch((error) => {
  console.error("Error running the bot:", error.message);
});
