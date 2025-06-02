class Player {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.points = 0;
    this.resource = {
      oro: 7,
      madera: 0,
      piedra: 0,
      arcilla: 0,
      cristal: 0,
      papel: 0,
    };
  }

  selectCard(card) {
    this.addCardToHand(card);
    this.addResources(card);
    this.addPoints(card);
  }

  checkEnoughResources(card) {
    for (let res in card.cost) {
      if (this.resource[res] < card.cost[res]) return false;
    }
    this.payForCard(card);
    return true;
  }

  payForCard(card) {
    if (!card.cost.oro) return;
    this.resource["oro"] -= card.cost["oro"];
  }

  addCardToHand(card) {
    this.cards.push(card);
  }

  addResources(card) {
    for (let res in card.effect.resource) {
      this.resource[res] += card.effect.resource[res];
    }
  }

  addPoints(card) {
    this.points += card.points;
  }

  discardCard() {
    // Agregamos 3 monedas de oro mas 1 por cada carta de comercio.

    const goldForDiscard = 3;
    const commerceCards = this.cards.filter(
      (card) => card.type === "comercio"
    ).length;
    this.resource.oro += goldForDiscard + commerceCards;
  }
}

export default Player;
