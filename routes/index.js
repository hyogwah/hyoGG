const summonerApiRoutes = require("./summonerApi");

const constructorMethod = (app) => {
  app.use("/", summonerApiRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
