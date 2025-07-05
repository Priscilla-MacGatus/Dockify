import React from "react";
import Draggable from "react-draggable";
import styles from "./Window.module.css";

export default function Window({ title, onClose, children }) {
  return (
    <Draggable handle={`.${styles.header}`}>
      <div className={styles.window}>
        <div className={styles.header}>
          <span>{title}</span>
          <div className={styles.controls}>
            <div className={styles.dot} onClick={onClose}></div> onClick=
            {(e) => {
              e.stopPropagation();
              onClose();
            }}
          </div>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </Draggable>
  );
}
