const driverData = require("../data/driver");
const userData = require("../data/users");
const path = require("path");

module.exports = (app) => {
  //fetches driver by id
  app.get("/api/drivers/:id", (req, res) => {
    const driverId = req.params.id;

    res.setHeader("Content-Type", "text/html");

    for (let i = 0; i < driverData.length; i++) {
      if (driverId == driverData[i].id) {
        res.sendFile(path.join(__dirname, "./images/Driver_photo.png"));
        res.write("<h2> Your Driver</h2>" + `<h1>${driverData[i].name} </h1>`);
        res.write(`<p>${driverData[i].description}</p>`);
        res.write(`<h4>${userData[i].dropoff.street1}</h4>`);
      }
    }
    res.end();
    return res.json(false);
  });
};
