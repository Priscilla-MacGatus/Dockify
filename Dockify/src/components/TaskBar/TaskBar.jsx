import React from "react";
import styles from "./TaskBar.module.css";

export default function TaskBar({ openWindow }) {
  return (
    <div className={styles.taskbar}>
      <img
        src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/ca0e1447bc600dcc91abcb674d66f6b0_AgiKo5062E.png"
        alt="User"
        onDoubleClick={() => openWindow("about")}
        className={styles.icon}
      />
      <img
        src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/e09189c67e69691c4508fa8ef1bb821b_low_res_folder_dock_icon_3.png"
        alt="Projects Folder"
        onDoubleClick={() => openWindow("projects")}
        className={styles.icon}
      />
      <img
        src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/66c7ae19964613c774a3751916d496b3_yNBo22mIIb.png"
        alt="Settings"
        onDoubleClick={() => openWindow("projects")}
        className={styles.icon}
      />

      <img
        src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/52a9032482725eb55892b3887714af67_low_res_Calculator.png"
        alt="Calculator"
        className={styles.icon}
      />
      <img
        src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/d1505a5ff95ae87f319e3384e784edf1_low_res_Google_Mail.png"
        alt="Contact"
        className={styles.icon}
      />
      <img
        src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/9f45dff68f65503e9d253cf03c5bbf2d_low_res_Weather__MacOS_Tahoe_.png"
        alt="Weather"
        className={styles.icon}
      />

      <img
        src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/51f93886aae8020c24a499a78bc19be3_low_res_LinkedIn.png"
        alt="LinkedIn"
        className={styles.icon}
      />
      <img
        src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/dd177ee126e14e6b3b5e7a8bea50a599_low_res_GitHub_appicon.png"
        alt="Github"
        className={styles.icon}
      />
    </div>
  );
}
