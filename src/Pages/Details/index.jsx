import Rating from "../../Components/Rating";
import TopicActionCard from "../../Components/TopicActionCard";
import styles from "./index.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import IconTable from "../../Components/IconTable";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import useAPI from "../../utils/useAPI";
import { FadeLoader } from "react-spinners";
import LoadingError from "../../Components/Errors/LoadingError";
import ThemeContext from "../../contexts/ThemeContext";
import { BsCheckCircle } from "react-icons/bs";

const Details = ({ setFavCards, favCards }) => {
  const cardId = useParams().id;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [cradDetails] = useAPI(
    `https://tap-web-1.herokuapp.com/topics/details/${cardId}`,
    setLoading,
    setError
  );

  const theme = useContext(ThemeContext);

  const loaderOverride = {
    margin: "auto",
  };

  if (cradDetails)
    return (
      <>
        <main
          className={`${theme} ${loading ? styles.loading : styles.container}`}
        >
          <div className={styles["descreption-container"]}>
            <h3>{cradDetails.category}</h3>
            <h2>{cradDetails.topic}</h2>
            <Rating
              size={17}
              className={styles.rating}
              rating={cradDetails.rating}
            />
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
            <IconTable
              icon={
                <BsCheckCircle
                  className={styles.icon}
                  color="#03c180"
                  size={18}
                />
              }
              data={cradDetails}
            />
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
