const firstAgeCards = [
  // Materiales (Marrón) - points bajos (base de la economía)
  { name: "Serrería", type: "Material", points: 1 },
  { name: "Cantera", type: "Material", points: 1 },
  { name: "Mina de arcilla", type: "Material", points: 1 },
  { name: "Mina de mineral", type: "Material", points: 2 }, // Mineral más valioso

  // Manufacturas (Gris) - points medios (recursos avanzados)
  { name: "Telar", type: "Manufactura", points: 2 },
  { name: "Horno de vidrio", type: "Manufactura", points: 3 },
  { name: "Fundición", type: "Manufactura", points: 2 },

  // Civiles (Azul) - points altos (como en el juego original + bonus)
  { name: "Altar", type: "Civil", points: 3 },
  { name: "Taller", type: "Civil", points: 2 },
  { name: "Teatro", type: "Civil", points: 4 }, // ¡La estrella cultural!

  // Comercio (Amarillo) - points variables (para equilibrio)
  { name: "Taverna Este", type: "Comercio", points: 1 },
  { name: "Taverna Oeste", type: "Comercio", points: 1 },
  { name: "Mercado", type: "Comercio", points: 2 }, // Beneficio estratégico

  // Militares (Rojo) - points moderados (el poder tiene precio)
  { name: "Cuartel", type: "Militar", points: 2 },
  { name: "Torre de vigilancia", type: "Militar", points: 3 },

  // Científicas (Verde) - points bajos (su valor está en los símbolos)
  { name: "Rueda", type: "Científico", points: 1 },
  { name: "Escritura", type: "Científico", points: 1 },
  { name: "Ley", type: "Científico", points: 2 }, // La ley es importante
];

export { firstAgeCards };
