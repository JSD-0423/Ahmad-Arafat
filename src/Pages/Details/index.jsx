import Rating from "../../Components/Rating";
import TopicActionCard from "../../Components/TopicActionCard";
import styles from "./index.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import IconTable from "../../Components/IconTable";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useAPI from "../../utils/useAPI";
import { FadeLoader } from "react-spinners";
import LoadingError from "../../Components/Errors/LoadingError";

const Details = ({ setFavCards, favCards }) => {
  const cardId = useParams().id;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [cradDetails] = useAPI(
    `https://tap-web-1.herokuapp.com/topics/details/${cardId}`,
    setLoading,
    setError
  );

  const loaderOverride = {
    margin: "auto",
  };

  if (cradDetails)
    return (
      <>
        <main className={loading ? styles.loading : styles.container}>
          <div className={styles["descreption-container"]}>
            <h3>{cradDetails.category}</h3>
            <h2>{cradDetails.topic}</h2>
            <Rating size={17} rating={cradDetails.rating} />
            <p>{cradDetails.description}</p>
          </div>
          <div className={styles.card}>
            <TopicActionCard
              actionIcon={<AiOutlineHeart size={30} color={"#ededed"} />}
              actionText={"Add To Faviourtes"}
              topic={cradDetails.topic}
              author={cradDetails.name}
              image={cradDetails.image}
              setFavCards={setFavCards}
              rating={cradDetails.rating}
              id={cardId}
              favCards={favCards}
            />
          </div>
          <div className={styles.table}>
            <IconTable />
          </div>
        </main>
      </>
    );
  else if (loading)
    return (
      <FadeLoader loading={loading} cssOverride={loaderOverride} size={20} />
    );
  else return <LoadingError />;
};
export default Details;
