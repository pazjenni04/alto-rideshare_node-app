const userData = require("../data/users");

module.exports = (app) => {
  //fetches and renders user's trip information
  app.get("/api/user/trip/:id", (req, res) => {
    const user = req.params.id;

    res.setHeader("Content-Type", "text/html");

    for (let i = 0; i < userData.length; i++) {
      if (user == userData[i].id) {
        res.write(
          "<h2>Your Trip</h2>" + `<h1>${userData[i].estimated_arrival}</h1>`
        );
        res.write(
          `<p>Estimated arrival at ${userData[i].dropoff.street1} ${userData[i].dropoff.street2}`
        );
        res.write(
          `<p>Estimated fare: ${userData[i].fare_min} - ${userData[i].fare_max}</p>`
        );
        res.write(
          `<p>Passengers: ${userData[i].passenger_min} - ${userData[i].passenger_max}</p>`
        );
        res.write(`<p>Payment: ${userData[i].payment}</p>`);
        res.write(
          `<h4>${userData[i].pickup.street1}${userData[i].pickup.street2} ${userData[i].pickup.city}, ${userData[i].pickup.state} ${userData[i].pickup.zip_code}</h4>`
        );
        res.write(
          `<p>${userData[i].dropoff.street1}</p><p>${userData[i].dropoff.street2}</p><p>${userData[i].dropoff.city}, ${userData[i].dropoff.state} ${userData[i].dropoff.zip_code}</p>`
        );
        res.write(`<p>${userData[i].notes}</p>`);
      }
    }
    res.end();

    return res.json(false);
  });

  //fetches and renders user's driver info
  app.get("/api/user/vehicle/:id", (req, res) => {
    const user = req.params.id;

    res.setHeader("Content-Type", "text/html");

    for (let i = 0; i < userData.length; i++) {
      if (user == userData[i].id) {
        res.write(
          "<h2>Your Vehicle<h2>" +
            `<h1>${userData[i].driver.assignedVehicle}</h1>`
        );
        res.write(
          "<h3>Make/Model</h3>" + `<p>${userData[i].driver.assignedMake}</p>`
        );
        res.write(
          "<h3>Color</h3>" + `<p>${userData[i].driver.assignedColor}</p>`
        );
        res.write(`<h4>${userData[i].dropoff.street1}</h4>`);
      }
    }
    res.end();

    return res.json(false);
  });

  //fetches and renders user's vibe
  app.get("/api/user/vibe/:id", (req, res) => {
    const user = req.params.id;

    res.setHeader("Content-Type", "text/html");

    for (let i = 0; i < userData.length; i++) {
      if (user == userData[i].id) {
        res.write(
          "<h2>Your Trip<h2>" + `<h1>${userData[i].estimated_arrival}</h1>`
        );
        res.write(`<p>Estimated arrival at ${userData[i].dropoff.street1}</p>`);
        res.write("<h4>Current Vibe</h4>" + `<p>${userData[i].carVibes}</p>`);
      }
    }
    res.end();

    return res.json(false);
  });

  //updates the vibe on user's profile
  app.patch("/api/user/vibe/:id", async (req, res) => {
    let vibe = userData.find((vibe) => vibe.id === parseInt(req.params.id));
    if (!vibe) return res.status(404).json({ message: "Not Found" });

    vibe.carVibes = req.body.carVibes;

    await res.json(vibe);
  });
};
