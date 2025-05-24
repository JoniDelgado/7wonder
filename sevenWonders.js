import { ageOneCards } from "./ageOneCards.js";

const cardsDisplay = document.querySelector(".cardsDisplay");
const showPlayer1 = document.querySelector(".showPlayer1");
const showPlayer2 = document.querySelector(".showPlayer2");
// const startButton = document.querySelector(".startButton");

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

class Cards {
  constructor(name, type, points = 0) {
    this.name = name;
    this.type = type;
    this.points = points;
  }
}

class Game {
  constructor(player1, player2) {
    this.players = [new Player(player1), new Player(player2)];
    this.actualTurn = 0;
    this.cards = [];
    this.showPlayerOnTurn();
    this.loadCards();
  }

  loadCards() {
    if (this.cards.length > 0) return;
    ageOneCards.forEach((card) => {
      const { nombre, type, puntos } = card;
      const newCard = new Cards(nombre, type, puntos);
      this.cards.push(newCard);
    });
    this.displayCards(this.cards);
  }

  displayCards(objCard) {
    cardsDisplay.innerHTML = "";
    objCard.forEach((card) => {
      const div = document.createElement("div");
      div.className = "card";
      div.addEventListener("click", () => this.onClickCard(card));
      const name = document.createElement("p");
      name.textContent = card.name;
      const type = document.createElement("p");
      type.textContent = card.type;
      const points = document.createElement("p");
      points.textContent = card.points;

      div.appendChild(name);
      div.appendChild(type);
      div.appendChild(points);

      cardsDisplay.appendChild(div);
    });
  }

  changeTurn() {
    // realizo checkeo por si se agregase la posibilidad de tener mas jugadores

    if (this.actualTurn === this.players.length - 1) this.actualTurn = 0;
    else this.actualTurn++;

    this.showPlayerOnTurn();
  }

  onClickCard(objCard) {
    this.players[this.actualTurn].selectCard(objCard);
    this.cards = this.cards.filter((card) => card.name !== objCard.name);
    this.changeTurn();
    this.displayCards(this.cards);
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

  showPlayerOnTurn() {
    showPlayer1.textContent = `Jugador: ${this.players[0].name}`;
    showPlayer2.textContent = `Jugador: ${this.players[1].name}`;
    if (this.actualTurn === 0) {
      showPlayer1.classList.add("playerOnTurn");
      showPlayer2.classList.remove("playerOnTurn");
    } else {
      showPlayer1.classList.remove("playerOnTurn");
      showPlayer2.classList.add("playerOnTurn");
    }
  }
}

new Game("jonatan", "Belen");
