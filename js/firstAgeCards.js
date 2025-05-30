const firstAgeCards = [
  {
    id: "1",
    name: "cantera",
    type: "materiales",
    cost: {},
    points: 0,
    effect: {
      resource: { piedra: 1 },
      military: 0,
      progress: 0,
    },
  },
  {
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
      progress: 0,
    },
  },
  {
    id: "3",
    name: "almacen de arcilla",
    type: "materiales",
    cost: {},
    points: 0,
    effect: {
      resource: { arcilla: 1 },
      military: 0,
      progress: 0,
    },
  },
  {
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
      progress: 0,
    },
  },
  {
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
      progress: 0,
    },
  },
  {
    id: "6",
    name: "almacen de madera",
    type: "materiales",
    cost: {},
    points: 0,
    effect: {
      resource: { madera: 1 },
      military: 0,
      progress: 0,
    },
  },
  {
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
      progress: 0,
    },
  },
  {
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
      progress: 0,
    },
  },
  {
    id: "9",
    name: "teatro",
    type: "civil",
    cost: {},
    points: 3,
    effect: {
      resource: {},
      military: 0,
      progress: 0,
    },
  },
  {
    id: "10",
    name: "altar",
    type: "civil",
    cost: {},
    points: 3,
    effect: {
      resource: {},
      military: 0,
      progress: 0,
    },
  },
  {
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
      progress: 0,
    },
  },
  {
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
      progress: 0,
    },
  },
  {
    id: "13",
    name: "torre de guardia",
    type: "militar",
    cost: {},
    points: 0,
    effect: {
      resource: {},
      military: 1,
      progress: 0,
    },
  },
  {
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
      progress: 0,
    },
  },
  {
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
      progress: 0,
    },
  },
  {
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
      progress: ["pluma"],
    },
  },
  {
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
      progress: ["abaco"],
    },
  },
  {
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
      progress: ["cuenco"],
    },
  },
  {
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
    },
  },
  {
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
      progress: ["cuenco"],
      comercio: ["madera"],
    },
  },
  {
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
      progress: ["arcilla"],
    },
  },
  {
    id: "22",
    name: "taberna",
    type: "comercio",
    cost: {},
    points: 0,
    effect: {
      resource: {},
      military: 0,
      progress: [],
    },
  },
  {
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
      progress: ["piedra"],
    },
  },
];

export { firstAgeCards };
