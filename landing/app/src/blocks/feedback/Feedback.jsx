import { Client } from "./client/Client";
import styles from "./Feedback.module.css";
import client1 from "../../assets/client1.png";
export const Feedback = () => {
  return (
    <div className={styles.feedbackContainer}>
      <div>
        <h2>Pets love Mixlab!</h2>
        <h3>
          See why we're 5 stars on <a>Yelp</a>, <a>Google</a> and{" "}
          <a>Facebook</a>:)
        </h3>
      </div>
      <div className={styles.feedback}>
        <Client
          name="Tootsie"
          adress="CA"
          photo={client1}
          feedback="Tootsie just received her Mixlab order and she’s so excited for it! Within two hours of ordering it got delivered to the house and its like she knew it was at the door. She absolutely hates taking her medicine but she truly loves her Mixlab box because it’s so informative, quick, easy to order but especially because includes a new toy each time! Thank you Mixlab for always taking care of her! She can’t wait to place her next order now!"
        />
      </div>
    </div>
  );
};
