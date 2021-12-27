import styles from "./Client.module.css";

export const Client = (props) => {
  return (
    <div className={styles.client}>
      <div>
        <img src={props.photo} />
      </div>

      <div className={styles.feedbackBlock}>
        <p>{props.feedback}</p>
        <p className={styles.clientInfo}>{`${props.name}, ${props.adress}`}</p>
      </div>
    </div>
  );
};
