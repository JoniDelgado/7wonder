class View {
  constructor(game) {
    this.game = game;
    this.cardsDisplay = document.querySelector(".cardsDisplay");
    this.turnPlayer1 = document.querySelector(".turnPlayer1");
    this.turnPlayer2 = document.querySelector(".turnPlayer2");
    this.resourceContainer = document.querySelectorAll(".resourceContainer");

    this.displayCards();
    this.showPlayerOnTurn();
  }

  createIconBlock({ imgSrc, text, container }) {
    const iconContainer = document.createElement("div");
    iconContainer.classList.add("iconContainer");

    const pointsIcon = document.createElement("p");
    pointsIcon.textContent = text;

    const icon = document.createElement("img");
    icon.src = imgSrc;

    iconContainer.append(icon);
    iconContainer.append(pointsIcon);
    container.append(iconContainer);
  }

  displayCards() {
    this.cardsDisplay.textContent = "";

    let containerFragment = document.createDocumentFragment();

    this.game.cards.forEach((card) => {
      const cardContainer = document.createElement("div");
      cardContainer.classList.add("cardContainer");

      const cardResources = document.createElement("div");
      cardResources.classList.add(card.type, "cardResources");

      // Mostrar puntos que otorga la carta
      if (card.points > 0) {
        this.createIconBlock({
          imgSrc: "./assets/icons/vp.png",
          text: card["points"],
          container: cardResources,
        });
      }

      // Mostramos recursos que tiene la carta
      Object.entries(card.effect).forEach(([key, value]) => {
        if (key === "resource") {
          Object.keys(value).forEach((res) => {
            if (res === "oro") {
              this.createIconBlock({
                imgSrc: `./assets/icons/${res}.png`,
                text: value[res],
                container: cardResources,
              });
            } else {
              this.createIconBlock({
                imgSrc: `./assets/icons/${res}.png`,
                text: null,
                container: cardResources,
              });
            }
          });

          // Mostramos poder militar de la carta
        } else if (key === "military" && value) {
          for (let i = 0; i < value; i++) {
            this.createIconBlock({
              imgSrc: `./assets/icons/war.png`,
              text: null,
              container: cardResources,
            });
          }

          //Mostrar recursos cartas de comercio
        } else if (key === "commerce" && value.length) {
          this.createIconBlock({
            imgSrc: `./assets/icons/${value.join("")}.png`,
            text: 1,
            container: cardResources,
          });
        }

        //Mostrar recursos de cartas de ciencia
        else if (key === "progress" && value.length) {
          this.createIconBlock({
            imgSrc: `./assets/icons/${value.join("")}.png`,
            text: null,
            container: cardResources,
          });
        }
      });

      //Sección de costo de cada carta

      const cardCost = document.createElement("div");
      cardCost.classList.add("cardCost");
      const cost = Object.entries(card.cost);
      if (cost.length) {
        cost.forEach(([key, value]) => {
          if (key === "oro") {
            this.createIconBlock({
              imgSrc: `./assets/icons/${key}.png`,
              text: value,
              container: cardCost,
            });
            return;
          }
          for (let i = 0; i < value; i++) {
            this.createIconBlock({
              imgSrc: `./assets/icons/${key}.png`,
              text: null,
              container: cardCost,
            });
          }
        });
      }

      //Sección de nombre de carta

      const cardName = document.createElement("div");
      cardName.classList.add("cardNameContainer");
      const name = document.createElement("p");
      name.textContent = card.name;
      cardName.append(name);

      // --- Botón para seleccionar carta para jugador ---

      const takeDiv = document.createElement("div");
      takeDiv.classList.add("take");
      takeDiv.textContent = "V";
      takeDiv.addEventListener("click", () => this.selectCard(card, "select"));

      // --- Botón para descartar carta ---

      const discardDiv = document.createElement("div");
      discardDiv.classList.add("discard");
      discardDiv.textContent = "X";
      discardDiv.addEventListener("click", () =>
        this.selectCard(card, "discard")
      );

      cardContainer.append(
        cardResources,
        cardCost,
        cardName,
        takeDiv,
        discardDiv
      );

      containerFragment.append(cardContainer);
    });

    this.cardsDisplay.append(containerFragment);
  }

  selectCard(card, action) {
    this.game.selectCard(card, action);
    this.displayCards();
    this.showPlayerOnTurn();
  }

  showPlayerResources() {
    this.resourceContainer.forEach((data, ind) => {
      data.textContent = "";
      const playerResource = this.game.players[ind].resource;

      for (let res in playerResource) {
        const resource = document.createElement("p");
        resource.textContent = `${res}: ${playerResource[res]}`;
        this.resourceContainer[ind].append(resource);
      }
    });
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
    this.showPlayerResources();
  }
}

export default View;
