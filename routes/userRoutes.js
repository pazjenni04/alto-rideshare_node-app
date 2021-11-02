//need to pull up one user's trip info - pickup and dropoff info
//need to pull up user's trip information with vibe attached
//need to create time of arrival for user when pull up all information
const drivers = require("../data/driver");
const userData = require("../data/users");
const vibesData = require("../data/vibes");

module.exports = (app) => {
  //fetches user's information based off id
  // app.get("/api/user/:id", (req, res) => {
  //   const user = req.params.id;

  //   for (let i = 0; i < userData.length; i++) {
  //     if (user == userData[i].id) {
  //       return res.write(userData[i]);
  //     }
  //   }

  //   return res.json(false);
  // });

  app.get("/api/user/driver/:id", (req, res) => {
    const user = req.params.id;

    // console.log("This is the user info :", user);
    // console.log("This is user Data ", userData);
    // console.log("This is the driver info ", userData.driver);
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
};
