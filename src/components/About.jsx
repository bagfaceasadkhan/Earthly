import React from "react";
import styles from "../styles/About.module.css";
const About = () => {
  return (
    <React.Fragment>
      <div id="about" className={styles.aboutContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.header}>
            AboutUs
            <hr
              style={{
                height: "10px",
                width: "100px",
                backgroundColor: "#2e7f42",
              }}
            ></hr>
          </div>
          <div className={styles.content}>
            Earthly is a platform designed for businesses that want to support
            the green movement and make a positive impact on the environment. It
            provides information and access to a range of eco-friendly products,
            specifically catering to the needs of cafes and food businesses. The
            platform offers a wide variety of sustainable products made from
            organic and environmentally friendly raw materials, such as bamboo
            toothbrushes, bamboo straws, plant-based coffee cups, and more. All
            products are carefully sourced and made at an affordable price,
            making it accessible for businesses of all sizes. Earthly operates
            with a fair trade policy, ensuring that all its suppliers are
            treated fairly and ethically.
            <br />
            Businesses can place orders for the products they need, which are
            tailored to fit their budget and requirements. By shopping at
            Earthly, businesses can not only contribute to a better future for
            the planet, but also align themselves with a growing trend towards
            sustainability and eco-friendliness.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
