import { Button } from "../../components/button/Button";
import styles from "./VetInfo.module.css";
import photo from "../../assets/womanNdog.png";
export const VetInfo = () => {
  return (
    <div className={styles.vetInfo}>
      <div className={styles.headline}>
        <img src={photo} />
      </div>
      <div className={styles.info}>
        <h3>FOR VETERINARIANS</h3>
        <h2>We're here to support you and your practice</h2>
        <p>
          Mixlab offers a simple, fast, reliable (and fun) home delivery
          pharmacy service for your clients. No more delays, no more
          miscommunications, no more grumpy pets. It’s time to partner with a
          pharmacy that cares about customer experience as much as you do.
        </p>
        <div className={styles.button}>
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};
