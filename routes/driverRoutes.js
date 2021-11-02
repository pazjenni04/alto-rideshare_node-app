//need to pull up driver's first name and description
//need to pull up driver's car info - make/Alto number/color
const driverData = require("../data/driver");

module.exports = (app) => {
  //fetches all drivers available
  app.get("/api/drivers/:id", (req, res) => {
    const chosen = req.params.id;

    for (let i = 0; i < driverData.length; i++) {
      const currentDriver = driverData.drivers.id[i];
      if (chosen === currentDriver.id) {
        return res.json(currentDriver[i]);
      }
    }

    return res.json(false);
  });

  //gets all drivers
  app.get("/api/drivers", (req, res) => {
    res.json(driverData);
    console.log(driverData);
  });
};
