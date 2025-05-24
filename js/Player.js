class Player {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.points = 0;
  }

  selectCard(card) {
    this.addCardToHand(card);
    this.addCardPoints(card);
  }

  addCardToHand(card) {
    this.cards.push(card);
  }

  addCardPoints(points) {
    this.points += points.points;
  }

  discardCard() {}
}

export default Player;
