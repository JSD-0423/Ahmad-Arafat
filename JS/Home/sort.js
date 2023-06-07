import extractDataFromCard from "../Utilities/extractDataFromCard.js";
import createAllCards from "./createAllCards.js";

const sort = () => {
  const cards = document.querySelector(".grid").children;

  const sortSelect = document.querySelector(".search-select-1");
  sortSelect.addEventListener("change", () => {
    const data = getSortedData(cards);
    console.log(data);
  });
};

const getSortedData = (cards) => {
  const data = [];

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    data.push(extractDataFromCard(card));
  }

  data.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });

  return data;
};

export default sort;
