const sort = (data, sortType) => {
  if (!data || data.length === 0) return data;

  const newData = data.map((val) => {
    return { ...val };
  });

  if (sortType === "default") {
    newData.sort((a, b) => a.id - b.id);
  } else {
    newData.sort((a, b) => {
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
  }

  return newData;
};

export default sort;
