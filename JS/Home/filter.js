const filter = (data, category) => {
  if (category === "default") return data;

  return data.filter((item) => item.category === category);
};

export default filter;
