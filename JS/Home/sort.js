const sort = (data, sortType) => {
  if (sortType === "default") return data;

  data.sort((a, b) => {
    const cardA = a[sortType].toUpperCase(); // ignore upper and lowercase
    const cardB = b[sortType].toUpperCase(); // ignore upper and lowercase
    if (cardA < cardB) {
      return -1;
    }
    if (cardA > cardB) {
      return 1;
    }

    // names must be equal
    return 0;
  });

  return data;
};

export default sort;
