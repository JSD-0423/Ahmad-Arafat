const searchInput = document.getElementsByClassName("search-input")[0];

searchInput.addEventListener("focus", (e) => {
  e.target.value = "           ";
});

searchInput.addEventListener("input", (e) => {
  console.log(e.target.value.length);
  if (e.target.value < 11) e.target.value = "           ";
});
