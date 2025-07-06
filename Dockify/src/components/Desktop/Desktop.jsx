import React from "react";
import DesktopIcon from "../DesktopIcon/DesktopIcon.jsx";
import styles from "./Desktop.module.css";

export default function Desktop({ openWindow }) {
  return (
    <div className={styles.desktopArea}>
      <DesktopIcon
        icon="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/ca0e1447bc600dcc91abcb674d66f6b0_AgiKo5062E.png"
        label="About Me"
        onDoubleClick={() => openWindow("about")}
      />
      <DesktopIcon
        icon="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/e09189c67e69691c4508fa8ef1bb821b_low_res_folder_dock_icon_3.png"
        label="Projects"
        onDoubleClick={() => openWindow("projects")}
      />
      <DesktopIcon
        icon="https://cdn3d.iconscout.com/3d/premium/thumb/approved-resume-3d-icon-download-in-png-blend-fbx-gltf-file-formats--profile-verified-cv-curriculum-vitae-selected-candidate-recruitmen-pack-business-icons-5668238.png"
        label="CV"
        onDoubleClick={() => openWindow("cv")}
      />
      <DesktopIcon
        icon="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/66c7ae19964613c774a3751916d496b3_yNBo22mIIb.png"
        label="Settings"
        onDoubleClick={() => openWindow("settings")}
      />
      <DesktopIcon
        icon="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/d1505a5ff95ae87f319e3384e784edf1_low_res_Google_Mail.png"
        label="Contact"
        onDoubleClick={() => openWindow("contact")}
      />
    </div>
  );
}
