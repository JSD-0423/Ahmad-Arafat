import fetchData from "../Utilities/fetchData.js";
import addRemoveFavorites from "./addRemoveFavorites.js";

const getQueryParams = () => {
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  return urlParams;
};

const populateDetalis = (data) => {
  const topicTop = document.querySelector(".main-content h2");
  const topicCard = document.querySelector(".main-content.card h4");
  topicTop.append(data.topic);
  topicCard.append(data.topic);

  const category = document.querySelector(".main-content h3");
  category.append(data.category);

  const description = document.querySelector(".main-content p");
  description.append(data.description);

  const image = document.querySelector(".card :nth-child(1)");
  image.style.backgroundImage = `url('../assets/${data.image}')`;

  addRemoveFavorites(data);

  const authorName = document.querySelector(".card a");
  authorName.append(data.name);

  const subTopics = document.querySelector("table").children[0].children;
  subTopics[0].querySelector("span").append(data.topic);
  for (let i = 0; i < subTopics.length - 1; i++) {
    subTopics[i + 1].children[0].append(data.subtopics[i]);
  }
};

const fetchDetails = (getQueryParams, populateDetalis) => {
  const queryParams = getQueryParams();
  const id = queryParams.get("cardid");
  fetchData(
    populateDetalis,
    `https://tap-web-1.herokuapp.com/topics/details/${id}`
  );
};

fetchDetails(getQueryParams, populateDetalis);
