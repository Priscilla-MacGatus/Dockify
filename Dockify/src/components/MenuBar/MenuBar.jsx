import React from "react";
import styles from "./MenuBar.module.css";

export default function MenuBar() {
  return (
    <div className={styles.menuBar}>
      <div className={styles.logo}>
        <img src="./Favicon.png" alt="Logo" className={styles.image} />
      </div>
      <div className={styles.time}>Fri 4 Jul 10:24</div>
    </div>
  );
}
