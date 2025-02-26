const axios = require("axios");
const { Connection, PublicKey } = require("@solana/web3.js");

const connection = new Connection(process.env.SOLANA_RPC);

async function checkRugPull(tokenAddress) {
  try {
    const publicKey = new PublicKey(tokenAddress);
    const accountInfo = await connection.getParsedAccountInfo(publicKey);

    const mintAuthority = accountInfo.value?.data?.parsed?.info?.mintAuthority;

    if (mintAuthority) {
      console.log(`Token ${tokenAddress} has a mint authority: ${mintAuthority}`);
      return false; // Mint authority present, not safe
    }

    console.log(`Token ${tokenAddress} is safe (no mint authority).`);
    return true;
  } catch (error) {
    console.error(`Error checking rug pull for ${tokenAddress}:`, error.message);
    return false;
  }
}

module.exports = { checkRugPull };
