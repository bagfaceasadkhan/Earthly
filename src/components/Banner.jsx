import React from "react";
import styles from "../styles/Banner.module.css";
const Banner = () => {
  return (
    <React.Fragment>
      <div className={styles.nav}>
        <div className={styles.miniContainer}>
          <div className={styles.navHeader}>Earthly</div>
          <div className={styles.linkContainer}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#shop">Shop</a>
            <a href="#contact">ContactUs</a>
          </div>
        </div>
      </div>
      <div id="home" className={styles.banner}>
        <div className={styles.left}>
          <div className={styles.miniHeader}>Sustainable and Affordable</div>
          <div className={styles.header}>
            Choose revolution with our
            <span style={{ color: "#2e7f42", fontWeight: "700" }}>
              {" "}
              Sustainable Starter Kit
            </span>
            .
          </div>
          <div className={styles.subheader}>
            Choose green and join the revolution by using our ecofriendly,
            sustainable and affordable products.
          </div>
          <div className={styles.buttonContainer}>
            <button>Shop</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
