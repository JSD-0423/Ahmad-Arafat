import Rating from "../Rating";
import styles from "./index.module.css";

const TopicSummeryCard = ({ rating, topic, image }) => {
  return (
    <div className={styles.card}>
      <div
        style={{
          backgroundImage: `url(${require(`../../assets/images/${image}`)})`,
        }}
        className={styles.content}
      ></div>
      <div className={styles.content}>
        <h4>{topic}</h4>
        <Rating rating={rating} size={15} />
      </div>
    </div>
  );
};

export default TopicSummeryCard;
