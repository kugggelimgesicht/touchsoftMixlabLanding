import { Navigation } from "./navigation/Navigation";
import styles from "./Header.module.css";
import mainLogo from "../../assets/logo.png";
import { Button } from "../../components/button/Button";
export const Header = () => {
  return (
    <div className={styles.header}>
      <Navigation />
      <div className={styles.logo}>
        <img src={mainLogo} />
      </div>
      <p>Veterinarian login</p>
      <div className={styles.button}>
        <Button title={"Try Mixlab"} />
      </div>
    </div>
  );
};
