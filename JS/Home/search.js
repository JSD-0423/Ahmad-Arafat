import fetchData from "../Utilities/fetchData.js";
import debounce from "../Utilities/debounce.js";

const search = () => {
  const searchInput = document.querySelector(".search-input");
  const debounceTime = 300;
  searchInput.addEventListener(
    "input",
    debounce((e) => {
      fetchData(
        showMatched,
        `https://tap-web-1.herokuapp.com/topics/list?phrase=${e.target.value}`
      );
    }, debounceTime)
  );
};

const showMatched = (data) => {
  const grid = document.querySelector("main.grid");
  const cards = grid.children;

  const idSet = new Set();

  for (let i = 0; i < data.length; i++) {
    idSet.add(data[i].id);
  }

  for (let i = 0; i < cards.length; i++) {
    let cardId = parseInt(cards[i].getAttribute("cardId"));

    if (idSet.has(cardId)) {
      cards[i].style.display = "flex";
    } else {
      cards[i].style.display = "none";
    }
  }
};

export default search;
