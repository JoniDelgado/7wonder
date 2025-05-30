class Cards {
  constructor(id, name, type, points = 0, cost, effect) {
    (this.id = id), (this.name = name);
    this.type = type;
    this.cost = cost;
    this.points = points;
    this.effect = effect;
  }
}

export default Cards;
