import createCard from "./createCard.js";
import clearChildren from "../Utilities/clearChildren.js";

const renderCards = (data) => {
  const numOfCardsFound = document.querySelector("h2 span");
  numOfCardsFound.textContent = `"${data.length}"`;

  const cardsGrid = document.getElementsByClassName("grid")[0];
  clearChildren(cardsGrid);
  for (let i = 0; i < data.length; i++) {
    const card = createCard(data[i]);
    cardsGrid.appendChild(card);
  }
};

export default renderCards;
