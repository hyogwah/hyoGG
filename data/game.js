const axios = require("axios");
const apiKey = "RGAPI-8f5e5e5b-9878-4bc6-afd3-7c374c18f75b";

// Returns the current version of the game. As of Oct 1st: 12.18.1
async function getCurrentGameVersion() {
  const { data } = await axios.get(
    "https://ddragon.leagueoflegends.com/realms/na.json"
  );
  return data.v;
}

module.exports = {
  description: "game function",
  getCurrentGameVersion,
};
