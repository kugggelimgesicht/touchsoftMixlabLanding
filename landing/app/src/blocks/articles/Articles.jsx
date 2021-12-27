import { Button } from "../../components/button/Button";
import { Article } from "./article/Article";
import styles from "./Articles.module.css";
import articleImage1 from "../../assets/science.png";
import articleImage2 from "../../assets/blackdog.png";
export const Articles = () => {
  return (
    <div className={styles.articlesContainer}>
      <div className={styles.headline}>
        <h2>In the Wild</h2>
        <p>
          In The Wild is a collection of pieces to help close the communication
          gap, while growing the love (and understanding) between you and your
          best pal.
        </p>
      </div>
      <div className={styles.articles}>
        <Article
          image={articleImage1}
          time="May 3, 2021"
          title="What is compounding?"
          description="Compounding is the art and science of preparing personalized medications."
        />
        <Article
          image={articleImage2}
          time="June 15, 2021"
          title="Anxiety in Pets"
          description="An interview with a top behavioral specialist in NYC."
        />
      </div>
      <div className={styles.button}>
        <Button title={"View more"} />
      </div>
    </div>
  );
};
