import { ageOneCards } from "./ageOneCards.js";

const cardsDisplay = document.querySelector(".cardsDisplay");

class Player {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.points = 0;
  }

  selectCard(card) {
    this.cards.push(card);
    this.addCardPoints(card);
  }

  addCardPoints(points) {
    this.points += points.points;
    console.log(this);
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
    this.cards = this.loadCards();
  }

  changeTurn() {
    // realizo checkeo por si se agregase la posibilidad de tener mas jugadores

    if (this.actualTurn === this.players.length - 1) this.actualTurn = 0;
    else this.actualTurn++;
  }

  loadCards() {
    ageOneCards.forEach((card) => {
      const { nombre, type, puntos } = card;
      const newCard = new Cards(nombre, type, puntos);
      this.displayCard(newCard);
    });
  }

  displayCard(objCard) {
    const div = document.createElement("div");
    div.className = "card";
    div.addEventListener("click", () => {
      this.players[this.actualTurn].selectCard(objCard);
    });
    const name = document.createElement("p");
    name.textContent = objCard.name;
    const type = document.createElement("p");
    type.textContent = objCard.type;
    const points = document.createElement("p");
    points.textContent = objCard.points;

    div.appendChild(name);
    div.appendChild(type);
    div.appendChild(points);

    cardsDisplay.appendChild(div);
  }

  endGame() {}
}

const hola = new Game("jonatan", "Belen");
