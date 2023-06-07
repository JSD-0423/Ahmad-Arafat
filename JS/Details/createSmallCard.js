const createSmallCard = (data) => {
  const smallCard = document.createElement("div");
  smallCard.classList.add("small-card");
  smallCard.classList.add(`_${data.id}`);

  //attach event for user click to navigate to details
  smallCard.addEventListener("click", () => {
    const queryParam = "?cardid=" + encodeURIComponent(data.id);
    window.location.href = "./HTML/details.html" + queryParam;
  });

  const img = document.createElement("div");
  img.classList.add("small-card-content");
  img.style.backgroundImage = `url('../assets/${data.image}')`;
  smallCard.appendChild(img);

  const info = document.createElement("div");
  info.classList.add("small-card-content");
  smallCard.appendChild(info);

  const topic = document.createElement("h4");
  topic.append(data.topic);
  info.appendChild(topic);

  const rating = document.createElement("div");
  rating.classList.add("rating");
  rating.append(data.rating);
  info.appendChild(rating);

  return smallCard;
};

export default createSmallCard;
