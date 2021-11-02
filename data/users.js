const drivers = require("./driver");
const vibes = require("./vibes");

const users = [
  {
    id: "1",
    user: "Dwight Schrute",
    pickup: "4859 Bank St, Dallas, TX 75214",
    dropoff: "14251 Gaston Ave, Dallas, TX 75214",
    arrival: "1:00pm",
    fare: "$65 - $79",
    phone: "469-222-5555",
    passengers: "1-5",
    payment: "Amex01",
    vibes: {
      id: "Vapor",
      vibe: "Vaporwave Beats",
    },
    driver: {
      assignedVehicle: drivers[0].vehicle,
      assignedMake: drivers[0].vehicleMake,
      assignedColor: drivers[0].vehicleColor,
    },
  },
  {
    id: "2",
    name: "Jim Halpert",
    pickup: "8495 Skillman, Dallas, TX 75215",
    dropoff: "7498 Barbary Lane, Fate, TX 75189",
    arrival: "10:30am",
    fare: "$65 - $79",
    phone: "972-222-5487",
    passengers: "1-5",
    payment: "Amex03",
    vibes: {
      id: "Quiet",
      vibe: "Quiet ride",
    },
    driver: {
      assignedVehicle: drivers[1].vehicle,
      assignedMake: drivers[1].vehicleMake,
      assignedColor: drivers[1].vehicleColor,
    },
  },
  {
    id: "3",
    name: "Michael Scott",
    pickup: "400 Riverside, Dallas, TX 75215",
    dropoff: "4481 Dove Landing, Royse City, TX 75189",
    arrival: "5:39pm",
    fare: "$65 - $79",
    phone: "214-777-8457",
    passengers: "1-5",
    payment: "Amex02",
    vibes: {
      id: "Classic",
      vibe: "Classical music",
    },
    driver: {
      assignedVehicle: drivers[2].vehicle,
      assignedMake: drivers[2].vehicleMake,
      assignedColor: drivers[2].vehicleColor,
    },
  },
];

module.exports = users;
