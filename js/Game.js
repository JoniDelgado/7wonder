import { firstAgeCards } from "./firstAgeCards.js";
import Player from "./Player.js";
import Cards from "./Cards.js";

// const startButton = document.querySelector(".startButton");

class Game {
  constructor(player1, player2) {
    this.players = [new Player(player1), new Player(player2)];
    this.actualTurn = 0;
    this.cards = [];
    this.loadCards();
  }

  loadCards() {
    firstAgeCards.forEach((card) => {
      const { name, type, points } = card;
      const newCard = new Cards(name, type, points);
      this.cards.push(newCard);
    });
  }

  changeTurn() {
    if (this.actualTurn === this.players.length - 1) this.actualTurn = 0;
    else this.actualTurn++;
  }

  onClickCard(objCard) {
    this.players[this.actualTurn].selectCard(objCard);
    this.cards = this.cards.filter((card) => card.name !== objCard.name);
    this.changeTurn();
    this.endGame();
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
