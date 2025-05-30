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
      div.classList.add(card.type);
      const name = document.createElement("p");
      name.textContent = card.name;
      const type = document.createElement("p");
      type.textContent = card.type;
      const points = document.createElement("p");
      points.textContent = card.points;

      const takeDiv = document.createElement("div");
      takeDiv.classList.add("take");
      takeDiv.textContent = "V";
      takeDiv.addEventListener("click", () => this.selectCard(card, "select"));

      const discardDiv = document.createElement("div");
      discardDiv.classList.add("discard");
      discardDiv.textContent = "X";
      discardDiv.addEventListener("click", () =>
        this.selectCard(card, "discard")
      );

      div.appendChild(takeDiv);
      div.appendChild(discardDiv);

      div.appendChild(name);
      div.appendChild(type);
      if (card.points > 0) div.appendChild(points);

      this.cardsDisplay.appendChild(div);
    });
  }

  selectCard(card, action) {
    this.game.selectCard(card, action);
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
