import styles from "./Step.module.css";

export const Step = ({image, title, description}) => {
  return (
    <div className={styles.step}>
        <div className={styles.photo}><img src={image}/></div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  );
};
