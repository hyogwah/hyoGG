const axios = require("axios");
const gameApiFunc = require("./game");
const championApiFunc = require("./champion");

const apiKey = "RGAPI-8f5e5e5b-9878-4bc6-afd3-7c374c18f75b";

async function getSummoner(username) {
  let link = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${apiKey}`;
  const { data } = await axios.get(link);
  return data;
}

async function getHighestMastery(summonerApi) {
  let encryptedSummonerId = summonerApi.id;
  let link = `https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${encryptedSummonerId}/top?api_key=${apiKey}`;
  const { data } = await axios.get(link);

  const highestMasteryObj = [];
  for (const x of data) {
    let obj = {};
    obj.championId = x.championId;
    obj.championName = await championApiFunc.getChampionById(x.championId);
    obj.championLevel = x.championLevel;
    obj.championPoints = x.championPoints;
    highestMasteryObj.push(obj);
  }

  // At this point, highestMasteryObj returns the obj with ID, LEVEL, POINTS. Time to convert ID -> CHAMP NAME
  return highestMasteryObj;
}

module.exports = {
  description: "summonerApi function",
  getSummoner,
  getHighestMastery,
};
