import { firstAgeCards } from "./firstAgeCards.js";
import Player from "./Player.js";

class Game {
  constructor(player1, player2) {
    this.players = [new Player(player1), new Player(player2)];
    this.actualTurn = 0;
    this.cards = null;
    this.discardCards = [];
    this.shuffleCards(firstAgeCards);
  }

  shuffleCards(arrCards) {
    const cardCopy = [...arrCards];
    for (let i = cardCopy.length - 1; i > 0; i--) {
      let randInd = Math.floor(Math.random() * i);
      let saveCardPosition = cardCopy[i];
      cardCopy[i] = cardCopy[randInd];
      cardCopy[randInd] = saveCardPosition;
    }
    this.cards = cardCopy;
  }

  changeTurn() {
    if (this.actualTurn === this.players.length - 1) this.actualTurn = 0;
    else this.actualTurn++;
  }

  selectCard(objCard, action) {
    if (action === "discard") {
      this.discardCards.push(objCard);
      this.cards = this.cards.filter((card) => card.id !== objCard.id);
      this.players[this.actualTurn].discardCard();
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
