import { Barber } from "../api/Barber";

export const barbers: Barber[] = [
  {
    id: "123",
    type: "private barber",
    photoURL: "http://placehold.it/100x100",
    name: "Jana Lushch",
    distance: "1.6 km",
    additionalServices: ["card-payment", "home-service", "drinks"],
    rank: 4.5,
    averagePrice: 300,
    services: [
      {
        name: "Classic haircut",
        price: 250,
      },
      {
        name: "Non-classic haircut",
        price: 250,
      },
      {
        name: "Super-classic haircut",
        price: 350,
      },
      {
        name: "Beard cut",
        price: 100,
      },
    ],
  },
];
