const ageOneCards = [
  // Materiales (Marrón) - Puntos bajos (base de la economía)
  { nombre: "Serrería", type: "Material", puntos: 1 },
  { nombre: "Cantera", type: "Material", puntos: 1 },
  { nombre: "Mina de arcilla", type: "Material", puntos: 1 },
  { nombre: "Mina de mineral", type: "Material", puntos: 2 }, // Mineral más valioso

  // Manufacturas (Gris) - Puntos medios (recursos avanzados)
  { nombre: "Telar", type: "Manufactura", puntos: 2 },
  { nombre: "Horno de vidrio", type: "Manufactura", puntos: 3 },
  { nombre: "Fundición", type: "Manufactura", puntos: 2 },

  // Civiles (Azul) - Puntos altos (como en el juego original + bonus)
  { nombre: "Altar", type: "Civil", puntos: 3 },
  { nombre: "Taller", type: "Civil", puntos: 2 },
  { nombre: "Teatro", type: "Civil", puntos: 4 }, // ¡La estrella cultural!

  // Comercio (Amarillo) - Puntos variables (para equilibrio)
  { nombre: "Taverna Este", type: "Comercio", puntos: 1 },
  { nombre: "Taverna Oeste", type: "Comercio", puntos: 1 },
  { nombre: "Mercado", type: "Comercio", puntos: 2 }, // Beneficio estratégico

  // Militares (Rojo) - Puntos moderados (el poder tiene precio)
  { nombre: "Cuartel", type: "Militar", puntos: 2 },
  { nombre: "Torre de vigilancia", type: "Militar", puntos: 3 },

  // Científicas (Verde) - Puntos bajos (su valor está en los símbolos)
  { nombre: "Rueda", type: "Científico", puntos: 1 },
  { nombre: "Escritura", type: "Científico", puntos: 1 },
  { nombre: "Ley", type: "Científico", puntos: 2 }, // La ley es importante
];

export { ageOneCards };
