import styles from "./Footer.module.css";
import instagram from "../../assets/insta.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import yelp from "../../assets/undlogo.png";
import google from "../../assets/google.png";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div>
          <ul>
            <h4>QUICK LINKS</h4>
            <li>Veterinarians</li>
            <li>Products</li>
            <li>How it works</li>
            <li>About us</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Careers</li>
            <li>Veterinarian login</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <h4>CALL OR TEXT</h4>
          <p>(888) 901-4480</p>
          <h4>EMAIL</h4>
          <p>hello@mixlabrx.com</p>
          <h4>FAX</h4>
          <p>(212) 967-0892</p>
        </div>
        <div>
          <ul>
            <h4>NEW YORK CITY</h4>
            <li>336 West 37th St</li>
            <li>Suite 850</li>
            <li>New York, NY 10018</li>
          </ul>
          <ul>
            <li>Mon-Sat 10am - 8pm ET</li>
            <li>Sun 10am - 2pm ET</li>
          </ul>
        </div>
        <div>
          <ul>
            <h4>LOS ANGELES</h4>
            <li>2223 Federal Ave</li>
            <li>Los Angeles, CA 90064</li>
          </ul>
          <ul>
            <li>Mon-Sat 9am - 7pm PT</li>
            <li>Sun 9am - 1pm PT</li>
          </ul>
        </div>
        <div className={styles.social}>
          <h4>SOCIAL</h4>
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={yelp} alt="" />
          <img src={google} alt="" />
        </div>{" "}
        <div className={styles.terms}>
          <p>©2021 Mixlab, Inc.</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
};
