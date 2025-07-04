import React from "react";
import styles from "./IntroMode.module.css";

export default function IntroModal({ onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h1>Welcome!</h1>
        <img
          src="./perfil.jpg"
          alt="profile-picture"
          className={styles.perfil}
        />
        <p>
          Hello, I am Priscilla Mac-Gatus.
          <br />
          Stay with me as I walk you through My Portfolio.
        </p>
        <button onClick={onClose}>Start</button>
      </div>
    </div>
  );
}
