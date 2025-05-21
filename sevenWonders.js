import { ageOneCards } from "./ageOneCards.js";

const cardsDisplay = document.querySelector(".cardsDisplay");

function displayCard(objCard) {
  const div = document.createElement("div");
  div.className = "card";
  div.addEventListener("click", (e) => console.log(e.target));
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

class Player {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.points = 0;
  }

  selectCard() {}

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
    this.cards = this.showCards();
    this.onTurn = 0;
  }

  changeTurn() {}

  showCards() {
    ageOneCards.forEach((card) => {
      const { nombre, type, puntos } = card;
      const newCard = new Cards(nombre, type, puntos);
      displayCard(newCard);
    });
  }

  endGame() {}
}

new Game("jonatan", "Belen");
