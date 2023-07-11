import styles from "./index.module.css";
import TopicSummeryCard from "../TopicSummeryCard";
import { useContext, useEffect } from "react";
import ThemeContext from "../../contexts/ThemeContext";

const Favourites = ({ visibale, cardsData, setFavCards }) => {
  // handle local storage
  useEffect(() => {
    if (cardsData && cardsData.length !== 0)
      localStorage.setItem("favourites", JSON.stringify(cardsData));
  }, [cardsData]);

  //handle local storage
  useEffect(() => {
    setFavCards(JSON.parse(localStorage.getItem("favourites")));
  }, []);

  const theme = useContext(ThemeContext);
  return (
    <section
      className={`${styles.favourites} ${
        visibale ? styles.show : styles.hide
      } ${theme}`}
    >
      <h4>My Favourite Topics</h4>
      <div className={styles.grid}>
        {cardsData &&
          cardsData.map((data) => (
            <TopicSummeryCard
              image={data.image}
              rating={data.rating}
              topic={data.topic}
              key={data.id}
            />
          ))}
      </div>
    </section>
  );
};

export default Favourites;
