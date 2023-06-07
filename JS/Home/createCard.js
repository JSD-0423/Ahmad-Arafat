const createCard = (data) => {
  const card = document.createElement("a");
  card.classList.add("card");
  card.setAttribute("cardId", `${data.id}`);

  //attach event for user click to navigate to details
  card.addEventListener("click", () => {
    const queryParam = "?cardid=" + encodeURIComponent(data.id);
    window.location.href = "./HTML/details.html" + queryParam;
  });

  const img = document.createElement("div");
  img.classList.add("card-content");
  img.style.backgroundImage = `url('./assets/${data.image}')`;
  card.appendChild(img);

  const info = document.createElement("div");
  info.classList.add("card-content");
  card.appendChild(info);

  const categorie = document.createElement("h3");
  categorie.classList.add("card-info");
  categorie.append(data.categorie);
  info.appendChild(categorie);

  const topic = document.createElement("h4");
  topic.classList.add("card-info");
  topic.append(data.topic);
  info.appendChild(topic);

  const rating = document.createElement("div");
  rating.classList.add("card-info", "rating");
  rating.append(data.rating);
  info.appendChild(rating);

  const authorName = document.createElement("h5");
  authorName.classList.add("card-info");
  authorName.append(data.name);
  info.appendChild(authorName);

  return card;
};

export default createCard;
