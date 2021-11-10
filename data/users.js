const drivers = require("./driver");
const vibes = require("./vibes");

const users = [
  {
    id: 1,
    name: "Dwight Schrute",
    pickup: {
      street1: "449 Flora St.",
      street2: "",
      city: "Dallas",
      state: "TX",
      zip_code: 75201,
    },
    dropoff: {
      street1: "DFW International Airport",
      street2: "American Airlines - Terminal E",
      city: "Irving",
      state: "TX",
      zip_code: 75261,
    },
    estimated_arrival: "5:39pm",
    fare_min: "$65",
    fare_max: "$75",
    phone: "469-222-5555",
    passenger_min: 1,
    passenger_max: 5,
    payment: "Amex01",
    carVibes: vibes[1].vibe,
    driver: {
      assignedVehicle: drivers[0].vehicle,
      assignedMake: drivers[0].vehicleMake,
      assignedColor: drivers[0].vehicleColor,
    },
    notes: "Can you drop me off at AA International Bag Drop please?",
  },
  {
    id: 2,
    name: "Jim Halpert",
    pickup: {
      street1: "8495 Skillman",
      street2: "",
      city: "Dallas",
      state: "TX",
      zip_code: 75215,
    },
    dropoff: {
      street1: "14251 Gaston Ave",
      street2: "",
      city: "Dallas",
      state: "TX",
      zip_code: 75214,
    },
    estimated_arrival: "5:39pm",
    fare_min: "$65",
    fare_max: "$75",
    phone: "972-222-5487",
    passenger_min: 1,
    passenger_max: 5,
    payment: "Amex03",
    carVibes: vibes[2].vibe,
    driver: {
      assignedVehicle: drivers[1].vehicle,
      assignedMake: drivers[1].vehicleMake,
      assignedColor: drivers[1].vehicleColor,
    },
    notes: "",
  },
  {
    id: 3,
    name: "Michael Scott",
    pickup: {
      street1: "4500 S Cockrell Hill Rd.",
      street2: "",
      city: "Dallas",
      state: "TX",
      zip_code: 75236,
    },
    dropoff: {
      street1: "3667 Mapleshade Lane",
      street2: "",
      city: "Plano",
      state: "TX",
      zip_code: 75075,
    },
    estimated_arrival: "5:39pm",
    fare_min: "$65",
    fare_max: "$75",
    phone: "214-777-8457",
    passenger_min: 1,
    passenger_max: 5,
    payment: "Amex02",
    carVibes: vibes[3].vibe,
    driver: {
      assignedVehicle: drivers[2].vehicle,
      assignedMake: drivers[2].vehicleMake,
      assignedColor: drivers[2].vehicleColor,
    },
    notes:
      "Building hidden behind lots of trees, once you turn the corner you will see a large blue sign.",
  },
];

module.exports = users;
