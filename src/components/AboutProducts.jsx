import React from "react";
import styles from "../styles/About.module.css";
const AboutProducts = () => {
  return (
    <React.Fragment>
      <div className={styles.aboutContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.header}>
            About our products
            <hr
              style={{
                height: "10px",
                width: "100px",
                backgroundColor: "#2e7f42",
              }}
            ></hr>
          </div>
          <div className={styles.content}>
            The sustainable product is designed to be a better alternative to
            traditional products, offering several advantages and benefits.
            Firstly, it is made from 100% recyclable and non-toxic materials,
            making it safe and environmentally friendly. This means that the
            product can be safely disposed of after use, without harming the
            environment. Additionally, the product is leak-proof, ensuring that
            there are no spills or messes, making it ideal for use in cafes and
            food businesses. The product is also odorless and tasteless, and
            does not react with hot beverages, ensuring that it does not affect
            the taste or quality of the drinks. Another important feature of the
            product is its lightweight design, which makes it easy to handle and
            transport. The product is also microwavable, making it versatile and
            convenient for use in a variety of settings. Finally, the product is
            made from plant residue sourced from local farmers and Orange peels,
            demonstrating the company's commitment to sustainability and
            reducing waste. This means that the company is actively working to
            reduce waste and promote environmentally friendly practices, which
            aligns with the growing trend towards sustainability and
            eco-friendliness.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutProducts;
