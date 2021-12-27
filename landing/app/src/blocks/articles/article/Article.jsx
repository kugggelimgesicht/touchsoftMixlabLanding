import styles from "./Article.module.css";

export const Article = ({ image, time, title, description }) => {
  return (
    <div className={styles.article}>
      <div>
        <img src={image} />
      </div>
      <div className={styles.text}>
        <p>{time}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <a>Read the article</a>
      </div>
    </div>
  );
};
