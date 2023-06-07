const fetchData = (cb, url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      cb(data);
    })
    .catch((err) => console.log(err));
};

export default fetchData;
