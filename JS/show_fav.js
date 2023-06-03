let favButton = document.getElementsByClassName("icon-button")[1];
let favSection = document.getElementsByClassName("favourites")[0];
let isFav = false;

// favourites show/hide
favButton.addEventListener("click", () => {
  isFav = !isFav;

  if (isFav) favSection.style.bottom = "0px";
  else favSection.style.bottom = "-178px";
});
