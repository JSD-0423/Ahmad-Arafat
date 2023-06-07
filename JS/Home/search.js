import fetchData from "../Utilities/fetchData.js";

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

/* The solution here works on the cards that has already been 
fetched and created to aviod creating new cards on each search
 operation, other soultions should be used for bigger data sets */
const showMatched = (data) => {
  const numOfCardsFound = document.querySelector("h2 span");
  numOfCardsFound.textContent = `"${data.length}"`;

  const cards = document.querySelector("main.grid").children;
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

function debounce(callback, wait) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
    }, wait);
  };
}

export default search;
