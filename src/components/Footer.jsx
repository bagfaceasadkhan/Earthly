import React from "react";
import styles from "../styles/Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
const Footer = () => {
  return (
    <React.Fragment>
      <div className={styles.mainContainer}>
        <div className={styles.miniContainer}>
          <div className={styles.left}>© Earthly</div>
          <div className={styles.right}>
            <InstagramIcon
              id="ig"
              style={{ fill: "white", marginRight: "20px" }}
            />
            <FacebookIcon style={{ fill: "white" }} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
