import React from "react";
import Draggable from "react-draggable";
import styles from "./Window.module.css";

export default function Window({ title, onClose, children }) {
  return (
    <Draggable handle={`.${styles.header}`} cancel={`.${styles.close}`}>
      <div className={styles.window}>
        <div className={styles.header}>
          <div className={styles.controls}>
            <div
              className={styles.close}
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            ></div>
          </div>
          <span className={styles.title} >{title}</span>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </Draggable>
  );
}
