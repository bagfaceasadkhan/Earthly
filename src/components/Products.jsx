import React from "react";
import styles from "../styles/Products.module.css";
const Products = () => {
  return (
    <React.Fragment>
      <div className={styles.mainContainer}>
        <div className={styles.miniContainer}>
          <div className={styles.pictureContainerOne}></div>
          <div className={styles.pictureContainerTwo}></div>
          <div className={styles.pictureContainerThree}></div>
          <div className={styles.pictureContainerFour}></div>
          <div className={styles.pictureContainerFive}></div>
          <div className={styles.pictureContainerSix}></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Products;
