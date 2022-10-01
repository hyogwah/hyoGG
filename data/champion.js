const axios = require("axios");
const gameApiFunc = require("./game");
const apiKey = "RGAPI-8f5e5e5b-9878-4bc6-afd3-7c374c18f75b";

async function getListOfChampions() {
  const version = await gameApiFunc.getCurrentGameVersion();
  let link = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`;
  const { data } = await axios.get(link);
  return data.data;
}

async function getChampionById(id) {
  const listOfChampions = await getListOfChampions();
  for (let key in listOfChampions) {
    if (listOfChampions[key].key == id) {
      return listOfChampions[key].id;
    }
  }
}
module.exports = {
  description: "game function",
  getListOfChampions,
  getChampionById,
};
