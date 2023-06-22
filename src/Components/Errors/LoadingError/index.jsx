import styles from "./index.module.css";

const LoadingError = (message) => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        Ooops something went wrong while loading data
      </div>
    </div>
  );
};

export default LoadingError;
