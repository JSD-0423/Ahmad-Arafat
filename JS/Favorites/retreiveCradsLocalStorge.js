const retrieveCradsLocalStorge = () => {
  const favSection = document.querySelector(".favourites .grid");
  favSection.innerHTML = localStorage.getItem("favCrads");
};

export default retrieveCradsLocalStorge;
