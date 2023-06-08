import debounce from "../Utilities/debounce.js";
import processCards from "./processCards.js";

const listenForEvents = () => {
  const searchInput = document.querySelector(".search-input");
  searchInput.addEventListener(
    "input",
    debounce(() => {
      processCards();
    })
  );

  const sortSelect = document.querySelector(".search-select-1");
  sortSelect.addEventListener("change", () => {
    processCards();
  });

  const filterSelect = document.querySelector(".search-select-2");
  filterSelect.addEventListener("change", () => {
    processCards();
  });
};

export default listenForEvents;
