const convertRatingToStars = (rating) => {
  const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(i);
  }

  return stars;
};

export default convertRatingToStars;
