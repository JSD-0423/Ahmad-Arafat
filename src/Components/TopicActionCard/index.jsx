import { useMemo } from "react";
import styles from "./index.module.css";
const TopicActionCard = ({
  actionIcon,
  topic,
  image,
  author,
  setFavCards,
  id,
  rating,
  favCards,
}) => {
  const exist = useMemo(() => {
    for (let i = 0; i < favCards.length; i++)
      if (favCards[i].id === id) return true;
    return false;
  }, [favCards]);

  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${require(`../../assets/images/${image}`)})`,
        }}
      ></div>
      <div className={styles.info}>
        <h4 className={styles.topic}>{topic}</h4> <span>by</span>{" "}
        <a className={styles.author}>{author}</a>
        <div className={styles.box}>
          <div>Intersted about this topic?</div>
          <button
            onClick={() => {
              if (!exist)
                setFavCards((prev) => [
                  ...prev,
                  { topic: topic, rating: rating, image: image, id: id },
                ]);
              else
                setFavCards((prev) => {
                  return prev.filter((card) => card.id !== id);
                });
            }}
            className={`${styles.button} ${
              exist ? styles["button-remove"] : styles["button-add"]
            }`}
          >
            <label className={styles.action}>
              {exist ? "Remove from favourites" : "Add to favourites"}
            </label>
            {actionIcon}
          </button>
          <h5>Unlimited Credits</h5>
        </div>
      </div>
    </div>
  );
};

export default TopicActionCard;
