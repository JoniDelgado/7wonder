class View {
  constructor(game) {
    this.game = game;
    this.cardsDisplay = document.querySelector(".cardsDisplay");
    this.turnPlayer1 = document.querySelector(".turnPlayer1");
    this.turnPlayer2 = document.querySelector(".turnPlayer2");

    this.displayCards();
    this.showPlayerOnTurn();
  }

  displayCards() {
    this.cardsDisplay.innerHTML = "";
    this.game.cards.forEach((card) => {
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

      this.cardsDisplay.appendChild(div);
    });
  }

  onClickCard(card) {
    this.game.onClickCard(card);
    this.displayCards();
    this.showPlayerOnTurn();
  }

  showPlayerOnTurn() {
    this.turnPlayer1.textContent = `Jugador: ${this.game.players[0].name}`;
    this.turnPlayer2.textContent = `Jugador: ${this.game.players[1].name}`;
    if (this.game.actualTurn === 0) {
      this.turnPlayer1.classList.add("playerOnTurn");
      this.turnPlayer2.classList.remove("playerOnTurn");
    } else {
      this.turnPlayer1.classList.remove("playerOnTurn");
      this.turnPlayer2.classList.add("playerOnTurn");
    }
  }
}

export default View;
