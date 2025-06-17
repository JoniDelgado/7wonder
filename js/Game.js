import cards from "./firstAgeCards.js";
import Player from "./Player.js";

const pyramid = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20],
];

class Game {
  constructor(player1, player2) {
    this.players = [new Player(player1), new Player(player2)];
    this.actualTurn = 0;
    this.cards = [];
    this.actualAge = null;
    this.discardCards = [];
    this.loadNextAgeCards(1);
  }

  // Cargamos las cartas de la era correspondiente
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

  // Mezclamos las cartas
  shuffleCards(arrCards) {
    const shuffledCards = [...arrCards];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      let randInd = Math.floor(Math.random() * i);
      let saveCardPosition = shuffledCards[i];
      shuffledCards[i] = shuffledCards[randInd];
      shuffledCards[randInd] = saveCardPosition;
    }

    this.dealCards(shuffledCards);
  }

  //Cantidad de cartas a reparetir por era y asignamos posición en la piramide
  dealCards(arrCards) {
    const cardsPerAge = 20;

    for (let i = 0; i < cardsPerAge; i++) {
      this.cards.push(arrCards[i]);

      const position = i + 1;
      arrCards[i].position = position;
    }

    this.assignCoversAndSide(this.cards, pyramid);
  }

  assignCoversAndSide(arrCards, arrPyramid) {
    arrCards.forEach((card) => {
      // Asignamos si la carta está boca abajo o boca arriba
      const isUp = arrPyramid.some((level, levelInd) => {
        if (levelInd % 2 === 0 && level.includes(card.position)) return true;
      });
      if (isUp) card.cardSide = "shown";
      else card.cardSide = "hidden";

      arrPyramid.forEach((level, levelInd, arr) => {
        if (levelInd < arr.length - 1 && level.includes(card.position)) {
          const cardPosition = level.indexOf(card.position);
          card.coveredBy.push(
            arr[levelInd + 1][cardPosition],
            arr[levelInd + 1][cardPosition + 1]
          );
        }
      });
    });
    this.isAvailableCard(arrCards);
  }

  isAvailableCard(arrCards) {
    arrCards.forEach((card) => {
      if (card.coveredBy.length === 0) {
        card.cardSide = "shown";
        card.available = true;
      }
    });
  }

  removeCoverCards(arrCards, objCard) {
    arrCards.forEach((card) => {
      if (card.coveredBy.includes(objCard.position)) {
        const ind = card.coveredBy.indexOf(objCard.position);
        card.coveredBy.splice(ind, 1);
      }
    });
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

    this.removeCoverCards(this.cards, objCard);
    this.isAvailableCard(this.cards);
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
