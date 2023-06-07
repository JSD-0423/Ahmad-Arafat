import createSmallCard from "./createSmallCard.js";

const addRemoveFavorites = (data) => {
  const favButton = document.querySelector(".card button");
  if (document.querySelector(`.small-card._${data.id}`) === null)
    favButton.classList.remove("remove");
  else favButton.classList.add("remove");

  favButton.addEventListener("click", () => {
    favButton.classList.toggle("remove");
    if (document.querySelector(`.small-card._${data.id}`) === null) {
      addToFavorites(data);
    } else {
      removeFromFavorites(data.id);
    }
  });
};

const addToFavorites = (data) => {
  const smallCrad = createSmallCard(data);
  const favSection = document.querySelector(".favourites .grid");
  favSection.appendChild(smallCrad);
  localStorage.setItem("favCrads", favSection.innerHTML);
};

const removeFromFavorites = (id) => {
  const smallCard = document.querySelector(`.small-card._${id}`);
  const favSection = document.querySelector(".favourites .grid");
  favSection.removeChild(smallCard);
  localStorage.setItem("favCrads", favSection.innerHTML);
};

export default addRemoveFavorites;
