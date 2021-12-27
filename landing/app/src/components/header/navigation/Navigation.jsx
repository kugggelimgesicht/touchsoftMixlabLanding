import styles from "./Navigation.module.css";
export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <a href="">Veterinarians</a>
      <a href="">How it works</a>
      <a href="">About us</a>
      <a href="">Blog</a>
      <a href="">Shop</a>
    </div>
  );
};
