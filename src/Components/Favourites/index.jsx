import styles from "./index.module.css";
import PresentationCard from "../PresentationCard";
import CardsData from "../../assets/CardsData";

const Favourites = ({ visibale }) => {
  return (
    <section
      className={`${styles.favourites} ${visibale ? styles.show : styles.hide}`}
    >
      <h4>My Favourite Topics</h4>
      <div className={styles.grid}>
        {CardsData.map((data) => (
          <PresentationCard
            rating={data.rating}
            image={data.image}
            topic={data.topic}
            key={data.id}
            parentStyles={styles.card}
          />
        ))}
      </div>
    </section>
  );
};

export default Favourites;
