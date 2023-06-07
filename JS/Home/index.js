import createAllCards from "./createAllCards.js";
import fetchData from "../Utilities/fetchData.js";
import search from "./search.js";
import sort from "./sort.js";

fetchData(createAllCards, "https://tap-web-1.herokuapp.com/topics/list");
search();
sort();
