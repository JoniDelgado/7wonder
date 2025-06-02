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

  displayCards() {
    this.cardsDisplay.textContent = "";

    let containerFragment = document.createDocumentFragment();

    this.game.cards.forEach((card) => {
      const cardContainer = document.createElement("div");
      cardContainer.classList.add("cardContainer");

      // Mostrar puntos que otorga la carta
      const cardResources = document.createElement("div");
      cardResources.classList.add(card.type, "cardResources");

      if (card.points > 0) {
        const pointsContainer = document.createElement("div");
        pointsContainer.classList.add("iconContainer");
        const points = document.createElement("p");
        points.textContent = card.points;
        const pointsIcon = document.createElement("img");
        // pointsIcon.classList.add("cardIcon");
        pointsIcon.src = "./assets/icons/vp.png";
        pointsContainer.append(pointsIcon);
        pointsContainer.append(points);
        cardResources.append(pointsContainer);
      }

      // Mostramos recursos que tiene la carta
      const resources = Object.entries(card.effect);

      resources.forEach(([key, value]) => {
        if (key === "resource") {
          Object.keys(value).forEach((res) => {
            const resourcesContainer = document.createElement("div");
            resourcesContainer.classList.add("iconContainer");
            const resourceImg = document.createElement("img");
            resourceImg.src = `./assets/icons/${res}.png`;
            if (res === "oro") {
              const resourcePoints = document.createElement("p");
              resourcePoints.textContent = value[res];
              resourcesContainer.append(resourcePoints);
            }
            resourcesContainer.append(resourceImg);
            cardResources.append(resourcesContainer);
          });

          // Mostramos poder militar de la carta
        } else if (key === "military" && value) {
          for (let i = 0; i < value; i++) {
            const militaryContainer = document.createElement("div");
            militaryContainer.classList.add("iconContainer");
            const militaryResource = document.createElement("img");
            militaryResource.src = `./assets/icons/war.png`;
            militaryContainer.append(militaryResource);
            cardResources.append(militaryContainer);
          }

          //Mostrar recursos cartas de comercio
        } else if (key === "commerce" && value.length) {
          const commerceContainer = document.createElement("div");
          commerceContainer.classList.add("iconContainer");
          const commercePoint = document.createElement("p");
          commercePoint.textContent = 1;
          const commerceResource = document.createElement("img");
          commerceResource.src = `./assets/icons/${value.join("")}.png`;
          commerceContainer.append(commercePoint);
          commerceContainer.append(commerceResource);
          cardResources.append(commerceContainer);
        }

        //Mostrar recursos de cartas de ciencia
        else if (key === "progress" && value.length) {
          console.log(value);
          const progressContainer = document.createElement("div");
          progressContainer.classList.add("iconContainer");
          const progressResource = document.createElement("img");
          progressResource.src = `./assets/icons/${value.join("")}.png`;
          progressContainer.append(progressResource);
          cardResources.append(progressContainer);
        }
      });

      const cardCost = document.createElement("div");

      const cardName = document.createElement("div");
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

      cardContainer.append(cardResources);
      cardContainer.append(takeDiv);
      cardContainer.append(discardDiv);
      cardContainer.append(cardName);

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
