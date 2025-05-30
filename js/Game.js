import { firstAgeCards } from "./firstAgeCards.js";
import Player from "./Player.js";
import Cards from "./Cards.js";

class Game {
  constructor(player1, player2) {
    this.players = [new Player(player1), new Player(player2)];
    this.actualTurn = 0;
    this.cards = [];
    this.discardCars = [];
    this.shuffleCards(firstAgeCards);
  }

  shuffleCards(arrCards) {
    const cardCopy = [...arrCards];
    for (let i = cardCopy.length - 1; i > 0; i--) {
      const randInd = Math.floor(Math.random() * i);
      [cardCopy[i], cardCopy[randInd]] = [cardCopy[randInd], cardCopy[i]];
    }
    this.loadCards(cardCopy);
  }

  loadCards(cards) {
    cards.forEach((card) => {
      const { id, name, type, points, cost, effect } = card;
      const newCard = new Cards(id, name, type, points, cost, effect);
      this.cards.push(newCard);
    });
  }

  changeTurn() {
    if (this.actualTurn === this.players.length - 1) this.actualTurn = 0;
    else this.actualTurn++;
  }

  selectCard(objCard, action) {
    if (action === "discard") {
      this.discardCars.push(objCard);
      this.cards = this.cards.filter((card) => card.id !== objCard.id);
      this.players[this.actualTurn].discardCard();
      console.log(this.players[this.actualTurn]);
      this.changeTurn();
      return;
    }
    if (this.players[this.actualTurn].checkEnoughResources(objCard)) {
      this.players[this.actualTurn].selectCard(objCard);
      this.cards = this.cards.filter((card) => card.id !== objCard.id);
      this.changeTurn();
      this.endGame();
    }
  }

  endGame() {
    if (this.cards.length === 0) {
      console.log(
        `
Los puntos del jugador ${this.players[0].name} son: ${this.players[0].points}
Los puntos del jugador ${this.players[1].name} son: ${this.players[1].points}
`
      );
    }
  }
}

export default Game;

//mezclar cartas
