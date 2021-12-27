import { Button } from "../../components/button/Button";
import styles from "./Main.module.css";
export const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.headline}>
        <h1>The pet pharmacy humans are jealous of.</h1>
        <p>
          5 stars on <a>Yelp</a>, <a>Google</a> and <a>Facebook </a>because your
          best friend deserves only the best in pet care.
        </p>
      </div>
      <div className={styles.button}>
        <Button title={"Try Mixlab"} />
      </div>
    </div>
  );
};
