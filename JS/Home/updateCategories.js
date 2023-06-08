const updateCategories = (data) => {
  const filterSelect = document.querySelector(".search-select-2");
  const set = new Set(
    data.map((value) => {
      return value.category;
    })
  );

  const categories = Array.from(set);

  for (let i = 0; i < categories.length; i++) {
    const option = document.createElement("option");
    option.value = categories[i];
    option.append(categories[i]);
    filterSelect.appendChild(option);
  }
};

export default updateCategories;
