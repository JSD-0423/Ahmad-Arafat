import createCard from "./createCard.js";

const createAllCards = (data) => {
  const numOfCardsFound = document.querySelector("h2 span");
  numOfCardsFound.textContent = `"${data.length}"`;

  const cardsGrid = document.getElementsByClassName("grid")[0];
  for (let i = 0; i < data.length; i++) {
    const card = createCard(data[i]);
    cardsGrid.appendChild(card);
  }
};

export default createAllCards;
