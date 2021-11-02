//need to pull up driver's first name and description
//need to pull up driver's car info - make/Alto number/color
const driverData = require("../data/driver");

module.exports = (app) => {
  //fetches driver by id
  app.get("/api/drivers/:id", (req, res) => {
    const driverId = req.params.id;

    for (let i = 0; i < driverData.length; i++) {
      console.log("This is driverData", driverData[i].id);
      if (driverId == driverData[i].id) {
        return res.json(driverData[i]);
      }
    }

    return res.json(false);
  });
};
