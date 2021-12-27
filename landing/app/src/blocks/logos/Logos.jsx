import styles from "./Logos.module.css";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
export const Logos = () => {
  return (
    <div className={styles.logosContainer}>
      <div className={styles.logos}>
        <div>
          <img src={logo1} alt="" />
        </div>
        <div>
          <img src={logo2} alt="" />
        </div>
        <div>
          <img src={logo3} alt="" />
        </div>
        <div>
          <img src={logo4} alt="" />
        </div>
        <div>
          <img src={logo5} alt="" />
        </div>
      </div>
    </div>
  );
};
