import styles from "./HowItWorks.module.css";
import { Step } from "./Step/Step";
import parrot from "../../assets/parrot.png";
import rabbit from "../../assets/HIWrabbit.png";
import dog from "../../assets/HIWdog.png";
import { Button } from "../../components/button/Button";

export const HowItWorks = () => {
  return (
    <div className={styles.howItWorks}>
      <div>
        <h2>How it works</h2>
      </div>
      <div className={styles.steps}>
        <Step
          image={parrot}
          title="We receive your prescription"
          description="Either your veterinarian sends us a prescription or we reach out to them for you. Whatever is easiest!"
        />
        <Step
          image={rabbit}
          title="You treat your pet"
          description="Fast and free next-day delivery, straight to your door. Same-day in NYC and LA."
        />
        <Step
          image={dog}
          title="We receive your prescription"
          description="Give your pet the care they need to feel better. Plus they can play with our included toy!"
        />
      </div>
      <div className={styles.button}>
        <Button title="Learn More" />
      </div>
    </div>
  );
};
