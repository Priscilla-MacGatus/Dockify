import React from "react";
import Draggable from "react-draggable";
import styles from "./DesktopIcon.module.css";

export default function DesktopIcon({ icon, label, onDoubleClick }) {
  return (
    <Draggable>
      <div className={styles.icon} onDoubleClick={onDoubleClick}>
        <img src={icon} alt={label} />
        <span>{label}</span>
      </div>
    </Draggable>
  );
}
