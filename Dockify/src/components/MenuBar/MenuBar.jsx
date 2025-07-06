import React from "react";
import { useEffect } from "react";
import styles from "./MenuBar.module.css";

export default function MenuBar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className={styles.menuBar}>
      <div className={styles.logo}>
        <img src="./Favicon.png" alt="Logo" className={styles.image} />
      </div>
      <div className={styles.time}>{formattedTime}</div>
    </div>
  );
}
