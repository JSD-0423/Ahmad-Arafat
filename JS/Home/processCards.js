import sort from "./sort.js";
import search from "./search.js";
import filter from "./filter.js";
import fetchData from "../Utilities/fetchData.js";
import renderCards from "./renderCards.js";

const processCards = () => {
  const searchValue = document.querySelector(".search-input").value;
  fetchData((searchedData) => {
    const sortType = document.querySelector(".search-select-1").value;
    const sortedData = sort(searchedData, sortType);
    const category = document.querySelector(".search-select-2").value;
    const filteredData = filter(sortedData, category);
    renderCards(filteredData);
  }, `https://tap-web-1.herokuapp.com/topics/list?phrase=${searchValue}`);
};

export default processCards;
