const express = require("express");
const router = express.Router();
const data = require("../data");
const summonerApi = data.summoner;
const championApi = data.champion;

router.route("/summoner/mastery/:id").get(async (req, res) => {
  try {
    const summonerJSON = await summonerApi.getSummoner(req.params.id);
    const user = await summonerApi.getHighestMastery(summonerJSON);
    res.json(user);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.route("/summoner/:id").get(async (req, res) => {
  try {
    const user = await summonerApi.getSummoner(req.params.id);
    res.json(user);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.route("/champion").get(async (req, res) => {
  try {
    const user = await championApi.getListOfChampions(req);
    res.json(user);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.route("/champion/:id").get(async (req, res) => {
  try {
    const user = await championApi.getChampionById(req.params.id);
    res.json(user);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
