import React from "react";
import styles from "../styles/Main.module.css";
const Main = () => {
  return (
    <React.Fragment>
      <div id="shop" className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.headerContainer}>
            Our Product
            <hr
              style={{
                height: "10px",
                width: "100px",
                backgroundColor: "#2e7f42",
              }}
            ></hr>
          </div>
          <div className={styles.miniContent}>
            <div className={styles.left}></div>
            <div className={styles.right}>
              <h5>Sustainibility Starterkit.</h5>
              <div>
                This starter kit is all you need to start the revolution. <br />{" "}
                Consists of:
                <ul>
                  <li> 2 Bamboo Straws.</li>
                  <li> 1 Plant Based Reusable Cup with 2 lids.</li>
                  <li> 1 Natural Loofah 1 box of 50 Bamboo Cotton Eartips. </li>
                  <li>1 Bamboo Toothbrush.</li>
                  <li>Features:</li>
                  <li>
                    Govt Approved, Tested, and approved in TUV Rhineland,
                    Germany 100% recyclable and non-toxic Leak-Proof Odorless
                    tasteless and doesn’t react with hot beverages Lightweight
                    Microwavable.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
