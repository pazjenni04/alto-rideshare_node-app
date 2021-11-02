const vibes = require("./vibes");

const users = [
  {
    id: "1",
    user: "Dwight Schrute",
    pickup: "4859 Bank St, Dallas, TX 75214",
    dropoff: "14251 Gaston Ave, Dallas, TX 75214",
    phone: "469-222-5555",
    vibes: {
      id: "Vapor",
      vibe: "Vaporwave Beats",
    },
  },
  {
    id: "2",
    name: "Jim Halpert",
    pickup: "8495 Skillman, Dallas, TX 75215",
    dropoff: "7498 Barbary Lane, Fate, TX 75189",
    phone: "972-222-5487",
    vibes: {
      id: "Quiet",
      vibe: "Quiet ride",
    },
  },
  {
    id: "3",
    name: "Michael Scott",
    pickup: "400 Riverside, Dallas, TX 75215",
    dropoff: "4481 Dove Landing, Royse City, TX 75189",
    phone: "214-777-8457",
    vibes: {
      id: "Classic",
      vibe: "Classical music",
    },
  },
];

module.exports = users;
