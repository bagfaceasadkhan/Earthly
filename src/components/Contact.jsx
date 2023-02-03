import React from "react";
import styles from "../styles/Contact.module.css";
const Contact = () => {
  return (
    <React.Fragment>
      <div id="contact" className={styles.mainContainer}>
        <div></div>
        <div className={styles.miniContainer}>
          <div className={styles.headerContainer}>
            Contact Us
            <hr
              style={{
                height: "10px",
                width: "100px",
                backgroundColor: "#2e7f42",
              }}
            ></hr>
          </div>
          <div className={styles.inputs}>
            <input type={"text"} placeholder="Name" />
            <input type={"email"} placeholder="Email" />
            <input type={"text-area"} placeholder="Message" />
            <button>Send</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
