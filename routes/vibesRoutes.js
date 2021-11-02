//need to render all vibes
//need to update vibe for user by user id and vibe id

const vibeData = require("../data/vibes");

module.exports = (app) => {
  app.get("/api/vibes", (req, res) => {
    res.json(vibeData);
  });

  // app.put("/api/vibes/:id", (req, res) => {
  //   console.log(id);
  // });
};
