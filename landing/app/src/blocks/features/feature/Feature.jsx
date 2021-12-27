import styles from "./Feature.module.css";

export const Feature = ({ title, description, ps }) => {
  return (
    <div className={styles.feature}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{ps}</p>
    </div>
  );
};
