import Cards from "./Cards.js";

const firstAgeCards = [
  new Cards({
    id: "1",
    name: "cantera",
    type: "materiales",
    cost: {},
    points: 0,
    effect: {
      resource: { piedra: 1 },
      military: 0,
      progress: [],
      commerce: [],
    },
  }),
  new Cards({
    id: "2",
    name: "explotación de arcilla",
    type: "materiales",
    cost: {
      oro: 1,
    },
    points: 0,
    effect: {
      resource: { arcilla: 1 },
      military: 0,
      progress: [],
      commerce: [],
    },
  }),
  new Cards({
    id: "3",
    name: "almacen de arcilla",
    type: "materiales",
    cost: {},
    points: 0,
    effect: {
      resource: { arcilla: 1 },
      military: 0,
      progress: [],
      commerce: [],
    },
  }),
  new Cards({
    id: "4",
    name: "almacen de piedra",
    type: "materiales",
    cost: {
      oro: 1,
    },
    points: 0,
    effect: {
      resource: { piedra: 1 },
      military: 0,
      progress: [],
      commerce: [],
    },
  }),
  new Cards({
    id: "5",
    name: "campo maderero",
    type: "materiales",
    cost: {
      oro: 1,
    },
    points: 0,
    effect: {
      resource: { madera: 1 },
      military: 0,
      progress: [],
      commerce: [],
    },
  }),
  new Cards({
    id: "6",
    name: "almacen de madera",
    type: "materiales",
    cost: {},
    points: 0,
    effect: {
      resource: { madera: 1 },
      military: 0,
      progress: [],
      commerce: [],
    },
  }),
  new Cards({
    id: "7",
    name: "prensa",
    type: "manufactura",
    cost: {
      oro: 1,
    },
    points: 0,
    effect: {
      resource: { papel: 1 },
      military: 0,
      progress: [],
      commerce: [],
    },
  }),
  new Cards({
    id: "8",
    name: "cristalería",
    type: "manufactura",
    cost: {
      oro: 1,
    },
    points: 0,
    effect: {
      resource: { cristal: 1 },
      military: 0,
      progress: [],
      commerce: [],
    },
  }),
  new Cards({
    id: "9",
    name: "teatro",
    type: "civil",
    cost: {},
    points: 3,
    effect: {
      resource: {},
      military: 0,
      progress: [],
      commerce: [],
    },
  }),
  new Cards({
    id: "10",
    name: "altar",
    type: "civil",
    cost: {},
    points: 3,
    effect: {
      resource: {},
      military: 0,
      progress: [],
      commerce: [],
    },
  }),
  new Cards({
    id: "11",
    name: "baños",
    type: "civil",
    cost: {
      piedra: 1,
    },
    points: 3,
    effect: {
      resource: {},
      military: 0,
      progress: [],
      commerce: [],
    },
  }),
  new Cards({
    id: "12",
    name: "palenque",
    type: "militar",
    cost: {
      oro: 2,
    },
    points: 0,
    effect: {
      resource: {},
      military: 1,
      progress: [],
      commerce: [],
    },
  }),
  new Cards({
    id: "13",
    name: "torre de guardia",
    type: "militar",
    cost: {},
    points: 0,
    effect: {
      resource: {},
      military: 1,
      progress: [],
      commerce: [],
    },
  }),
  new Cards({
    id: "14",
    name: "establos",
    type: "militar",
    cost: {
      madera: 1,
    },
    points: 0,
    effect: {
      resource: {},
      military: 1,
      progress: [],
      commerce: [],
    },
  }),
  new Cards({
    id: "15",
    name: "guarnición",
    type: "militar",
    cost: {
      arcilla: 1,
    },
    points: 0,
    effect: {
      resource: {},
      military: 1,
      progress: [],
      commerce: [],
    },
  }),
  new Cards({
    id: "16",
    name: "scriptorium",
    type: "cientifico",
    cost: {
      oro: 2,
    },
    points: 0,
    effect: {
      resource: {},
      military: 0,
      progress: ["escritura"],
      commerce: [],
    },
  }),
  new Cards({
    id: "17",
    name: "taller",
    type: "cientifico",
    cost: {
      papel: 1,
    },
    points: 1,
    effect: {
      resource: {},
      military: 0,
      progress: ["teatro"],
      commerce: [],
    },
  }),
  new Cards({
    id: "18",
    name: "botica",
    type: "cientifico",
    cost: {
      oro: 2,
    },
    points: 0,
    effect: {
      resource: {},
      military: 0,
      progress: ["mortero"],
      commerce: [],
    },
  }),
  new Cards({
    id: "19",
    name: "farmacia",
    type: "cientifico",
    cost: {
      cristal: 1,
    },
    points: 1,
    effect: {
      resource: {},
      military: 0,
      progress: ["rueda"],
      commerce: [],
    },
  }),
  new Cards({
    id: "20",
    name: "reserva de madera",
    type: "comercio",
    cost: {
      oro: 3,
    },
    points: 0,
    effect: {
      resource: {},
      military: 0,
      progress: [],
      commerce: ["madera"],
    },
  }),
  new Cards({
    id: "21",
    name: "reserva de arcilla",
    type: "comercio",
    cost: {
      oro: 3,
    },
    points: 0,
    effect: {
      resource: {},
      military: 0,
      progress: [],
      commerce: ["arcilla"],
    },
  }),
  new Cards({
    id: "22",
    name: "taberna",
    type: "comercio",
    cost: {},
    points: 0,
    effect: {
      resource: { oro: 4 },
      military: 0,
      progress: [],
      commerce: [],
    },
  }),
  new Cards({
    id: "23",
    name: "reserva de piedra",
    type: "comercio",
    cost: {
      oro: 3,
    },
    points: 0,
    effect: {
      resource: {},
      military: 0,
      progress: [],
      commerce: ["piedra"],
    },
  }),
];

export { firstAgeCards };
