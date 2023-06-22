import { useEffect, useMemo, useState } from "react";
import SearchBar from "../../Components/SearchBar";
import TopicLinkCard from "../../Components/TopicLinkCard";
import styles from "./index.module.css";
import useAPI from "../../utils/useAPI";
import getSearchBarOptions from "./Helpers/getSearchBarOptions";
import sort from "./Helpers/sort";
import filter from "./Helpers/filter";
import { ClipLoader } from "react-spinners";
import LoadingError from "../../Components/Errors/LoadingError";
import debounce from "../../utils/debounce";

const Home = () => {
  // loading and errors states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // fetch data states
  const [url, setURL] = useState("https://tap-web-1.herokuapp.com/topics/list");
  const [cardsData] = useAPI(url, setLoading, setError);

  // Search bar controlling states
  const [searchBarOptions, setSearchBarOptions] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [sortValue, setSortValue] = useState("default");
  const [filterValue, setFilterValue] = useState("default");

  // side effects
  useEffect(() => {
    if (cardsData) setSearchBarOptions(getSearchBarOptions(cardsData));
  }, [cardsData]);

  useEffect(() => {
    setURL(`https://tap-web-1.herokuapp.com/topics/list?phrase=${searchText}`);
  }, [searchText]);

  //loader css
  const loaderOverride = {
    margin: "auto",
  };

  return (
    <div className={styles.container}>
      <SearchBar
        searchText={searchText}
        filterValue={filterValue}
        sortValue={sortValue}
        setSearchText={setSearchText}
        setFilterValue={setFilterValue}
        setSortValue={setSortValue}
        options={searchBarOptions}
      />
      <h2>
        <span>
          {cardsData && filter(sort(cardsData, sortValue), filterValue).length}
        </span>{" "}
        Web Topics Found
      </h2>
      <main className={loading ? styles.loading : styles.grid}>
        {loading ? (
          <ClipLoader
            loading={loading}
            cssOverride={loaderOverride}
            size={150}
          />
        ) : error ? (
          <LoadingError />
        ) : (
          cardsData &&
          filter(sort(cardsData, sortValue), filterValue).map((obj) => {
            return (
              <TopicLinkCard
                rating={obj.rating}
                name={obj.name}
                category={obj.category}
                image={obj.image}
                topic={obj.topic}
                id={obj.id}
                key={obj.id}
              />
            );
          })
        )}
      </main>
    </div>
  );
};

export default Home;
