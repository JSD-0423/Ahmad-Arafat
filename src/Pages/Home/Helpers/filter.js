const filter = (data, category) => {
  if (category === "default") return data;

  const newData = data.map((val) => {
    return { ...val };
  });

  return newData.filter((item) => item.category === category);
};

export default filter;
