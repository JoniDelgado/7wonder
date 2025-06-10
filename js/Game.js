import cards from "./firstAgeCards.js";
import Player from "./Player.js";

class Game {
  constructor(player1, player2) {
    this.players = [new Player(player1), new Player(player2)];
    this.actualTurn = 0;
    this.cards = null;
    this.actualAge = null;
    this.discardCards = [];
    this.loadNextAgeCards(1);
  }

  loadNextAgeCards(ageNum) {
    const decksToLoad = {
      1: cards.firstAgeCards,
      2: cards.secondAgeCards,
      3: cards.thirdAgeCards,
    };

    if (!this.actualAge) {
      this.actualAge = ageNum;
    } else this.actualAge += 1;

    this.shuffleCards(decksToLoad[this.actualAge]);
  }

  shuffleCards(arrCards) {
    const cardCopy = [...arrCards];
    for (let i = cardCopy.length - 1; i > 0; i--) {
      let randInd = Math.floor(Math.random() * i);
      let saveCardPosition = cardCopy[i];
      cardCopy[i] = cardCopy[randInd];
      cardCopy[randInd] = saveCardPosition;
    }

    cardCopy.forEach((card) => {
      if (card.id % 2 === 0) card.cardSide = "shown";
    });

    this.cards = cardCopy;
  }

  selectCard(objCard, action) {
    if (action === "discard") {
      this.discardCards.push(objCard);
      this.cards = this.cards.filter((card) => card.id !== objCard.id);
      this.players[this.actualTurn].discardCard();
    } else if (this.players[this.actualTurn].checkEnoughResources(objCard)) {
      this.players[this.actualTurn].selectCard(objCard);
      this.cards = this.cards.filter((card) => card.id !== objCard.id);
    } else return;

    this.changeTurn();
    this.checkEndOfDeck();
  }

  changeTurn() {
    if (this.actualTurn === this.players.length - 1) this.actualTurn = 0;
    else this.actualTurn++;
  }

  checkEndOfDeck() {
    const lastAge = 3;
    if (this.cards.length === 0) {
      if (this.actualAge === lastAge) {
        this.endGame();
        return;
      }
      this.loadNextAgeCards(this.actualAge);
    }
  }

  endGame() {
    console.log("El juego se ha terminado");
  }
}

export default Game;

//mezclar cartas
