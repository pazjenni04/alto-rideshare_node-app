//need to pull up one user's trip info - pickup and dropoff info
//need to pull up user's trip information with vibe attached
//need to create time of arrival for user when pull up all information

const { get } = require("http");
const userData = require("../data/users");
const vibesData = require("../data/vibes");

module.exports = (app) => {
  //fetches and renders user's trip information
  app.get("/api/user/trip/:id", (req, res) => {
    const user = req.params.id;

    res.setHeader("Content-Type", "text/html");

    for (let i = 0; i < userData.length; i++) {
      if (user == userData[i].id) {
        res.write("<h2>You Trip</h2>" + `<h1>${userData[i].arrival}</h1>`);
        res.write(`<p>Estimated arrival at ${userData[i].dropoff}</p>`);
        res.write(`<p>Estimated fare: ${userData[i].fare}</p>`);
        res.write(`<p>Payment: ${userData[i].payment}</p>`);
        res.write(`<p>Passengers: ${userData[i].passengers}</p>`);
        res.write(`<h4>${userData[i].pickup}</h4>`);
        res.write(`<h2>${userData[i].dropoff}</h2>`);
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
        res.write(`<h4>${userData[i].dropoff}</h4>`);
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
        res.write("<h2>Your Trip<h2>" + `<h1>${userData[i].arrival}</h1>`);
        res.write(`<p>Estimated arrival at ${userData[i].dropoff}</p>`);
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
