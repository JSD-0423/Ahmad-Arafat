const extractDataFromCard = (card) => {
  const data = {};

  // Retrieve data from card
  const cardId = card.getAttribute("cardId");
  data.id = cardId;

  const img = card.querySelector(".card-content");
  const backgroundImage = img.style.backgroundImage;
  data.image = backgroundImage.replace('url("', "").replace('")', "");

  const categorie = card.querySelector("h3.card-info");
  data.categorie = categorie.textContent;

  const topic = card.querySelector("h4.card-info");
  data.topic = topic.textContent;

  const rating = card.querySelector(".rating");
  data.rating = rating.textContent;

  const authorName = card.querySelector("h5.card-info");
  data.name = authorName.textContent;

  return data;
};

export default extractDataFromCard;
