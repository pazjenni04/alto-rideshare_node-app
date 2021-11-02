//need to pull up driver's first name and description
//need to pull up driver's car info - make/Alto number/color
const driverData = require("../data/driver");

module.exports = (app) => {
  //fetches all drivers available
  app.get("/api/drivers", (req, res) => {
    res.json(driverData);
  });
};
