import renderCards from "./renderCards.js";
import listenForEvents from "./listenForEvents.js";
import fetchData from "../Utilities/fetchData.js";
import updateCategories from "./updateCategories.js";

const firstMount = (data) => {
  renderCards(data);
  updateCategories(data);
};

fetchData(firstMount, "https://tap-web-1.herokuapp.com/topics/list");
listenForEvents();
