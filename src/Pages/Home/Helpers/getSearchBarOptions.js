const getSearchBarOptions = (cardsData) => {
  const options = {};
  options.sortOptions = [
    { value: "name", text: "Author Name" },
    { value: "topic", text: "Topic title" },
  ];

  const filterOptions = cardsData.map((item) => {
    return { value: item.category, text: item.category };
  });

  options.filterOptions = [];
  const set = new Set();
  filterOptions.forEach((item) => {
    if (!set.has(item.value)) {
      options.filterOptions.push(item);
      set.add(item.value);
    }
  });

  return options;
};

export default getSearchBarOptions;
