function createStarRating(rating) {
  const container = document.createElement("div");
  container.classList.add("rating", "card-info");

  const fullStars = Math.floor(rating);
  const decimalPart = rating - fullStars;
  const halfStar = decimalPart >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    const star = document.createElement("ion-icon");
    star.classList.add("star");
    star.setAttribute("name", "star");
    container.appendChild(star);
  }

  if (halfStar) {
    const halfStarIcon = document.createElement("ion-icon");
    halfStarIcon.setAttribute("name", "star-half-outline");
    halfStarIcon.classList.add("star");
    container.appendChild(halfStarIcon);
  } else if (decimalPart > 0) {
    const emptyStar = document.createElement("ion-icon");
    emptyStar.classList.add("star");
    emptyStar.setAttribute("name", "star-outline");
    container.appendChild(emptyStar);
  }

  const remainingStars = 5 - Math.ceil(rating);
  for (let i = 0; i < remainingStars; i++) {
    const emptyStar = document.createElement("ion-icon");
    emptyStar.classList.add("star");
    emptyStar.setAttribute("name", "star-outline");
    container.appendChild(emptyStar);
  }

  return container;
}

export default createStarRating;
