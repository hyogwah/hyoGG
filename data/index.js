const summonerApi = require("./summoner");
const gameApi = require("./game");
const championApi = require("./champion");

module.exports = {
  summoner: summonerApi,
  game: gameApi,
  champion: championApi,
};
