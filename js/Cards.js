class Cards {
  constructor({ id, name, type, points = 0, cost, effect }) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.cost = cost;
    this.points = points;
    this.effect = effect;
    this.position = null;
    this.available = false;
    this.cardSide = null;
    this.coveredBy = [];
    this.pyramidRow = null;
  }

  turnCard() {}
}

export default Cards;
