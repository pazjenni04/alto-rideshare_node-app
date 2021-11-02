//need to pull up one user's trip info - pickup and dropoff info
//need to pull up user's trip information with vibe attached
//need to create time of arrival for user when pull up all information
const userData = require("../data/users");
const vibesData = require("../data/vibes");

module.exports = (app) => {
  //fetches user's information based off id
  app.get("/api/user/:id", (req, res) => {
    const user = req.params.id;

    for (let i = 0; i < userData.length; i++) {
      if (user == userData[i].id) {
        return res.json(userData[i]);
      }
    }

    return res.json(false);
  });
};
