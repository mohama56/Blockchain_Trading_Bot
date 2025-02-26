const axios = require("axios");

async function monitorTokens() {
  const apiUrl = "https://api.jup.ag/v1/tokens"; // Jupiter API endpoint

  try {
    const response = await axios.get(apiUrl);
    const tokens = response.data;

    // Filter or process tokens if needed
    console.log("New Tokens Found:", tokens);
    return tokens; // Return the list of tokens
  } catch (error) {
    console.error("Error monitoring tokens:", error.message);
    return [];
  }
}

module.exports = { monitorTokens };
