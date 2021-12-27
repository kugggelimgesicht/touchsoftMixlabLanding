import styles from "./Features.module.css";
import dog from "../../assets/featuresDog.png";
import { Feature } from "./feature/Feature";
export const Features = () => {
  return (
    <div className={styles.featuresContainer}>
      <div className={styles.headline}>
        <h2>
          We couldn’t find a pharmacy experience worthy of our best buds— so we
          created one.
        </h2>
        <div>
          <img src={dog} />
        </div>
      </div>
      <div className={styles.features}>
        <Feature
          title="Patients first, always"
          description=" We know how stressful it can be when your pet needs meds. That’s why
            we offer free next-day delivery and even do same-day in NYC and LA.
            We got you."
          ps=""
        />
        <Feature
          title="Tailored care"
          description="We’ll work with you and your veterinarian to find the very best solution for your pet. With our custom compounded options, we can change the dosage, flavor and form. We even have a flavor guarantee with over 40 options!.
            We got you."
          ps="P.S. Everyone seems to love the chicken-flavored chew treats!"
        />
        <Feature
          title="Support, 7 days a week"
          description="You’re not alone. Text, call, or email us 7 days a week—we’ll answer and do our best to sprinkle in a bit of sunshine. ☀️"
        />
      </div>
    </div>
  );
};
