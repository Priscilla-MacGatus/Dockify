import { useState } from "react";
import MenuBar from "./components/MenuBar/MenuBar.jsx";
import Taskbar from "./components/TaskBar/TaskBar.jsx";
import Desktop from "./components/Desktop/Desktop.jsx";
import IntroMode from "./components/IntroMode/IntroMode.jsx";
import Window from "./components/Window/Window.jsx";
import "./App.css";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [openWindows, setOpenWindows] = useState([]);

  function openWindow(name) {
    if (!openWindows.includes(name)) {
      setOpenWindows([...openWindows, name]);
    }
  }

  function closeWindow(name) {
    setOpenWindows(openWindows.filter((w) => w !== name));
  }

  return (
    <div className="desktop">
      <MenuBar />
      <Desktop openWindow={openWindow} />
      {showIntro && <IntroMode onClose={() => setShowIntro(false)} />}
      <Taskbar openWindow={openWindow} />

      {/* Windows */}
      {openWindows.includes("about") && (
        <Window title="About Me" onClose={() => closeWindow("about")}>
          <p>
            <b>"Crafting Seamless Digital Experiences"</b>
            <br />
            <br />
            Priscilla Mac-Gatus is a dynamic developer and designer, passionate
            about transforming ideas into innovative, user-friendly digital
            experiences. With a keen eye for design and a strong coding
            foundation, Priscilla creates solutions that are both functional and
            visually striking. Let's make the web a more beautiful place, one
            project at a time!
          </p>
        </Window>
      )}
      {openWindows.includes("projects") && (
        <Window title="Projects" onClose={() => closeWindow("projects")}>
          <div className="projects">
            <a href="https://deploy-preview-103--smart-cv-migracode.netlify.app/">
              <div className="icon">
                <img src="/file.png" alt="file" />
                <span>SmartCV Pathfolio</span>
              </div>
            </a>

            <a href="https://weather-app-by-pris.vercel.app/">
              <div className="icon">
                <img src="/file.png" alt="file" />
                <span>The Weather App</span>
              </div>
            </a>

            <a href="https://calcbypriscilla.vercel.app/">
              <div className="icon">
                <img src="/file.png" alt="file" />
                <span>Calculator App</span>
              </div>
            </a>

            <a href="https://flipcardsbycilla.vercel.app/">
              <div className="icon">
                <img src="/file.png" alt="file" />
                <span>FlipCard Master</span>
              </div>
            </a>

            <a href="https://currensyncbycilla.vercel.app/">
              <div className="icon">
                <img src="/file.png" alt="file" />
                <span>CurrenSync</span>
              </div>
            </a>

            <a href="https://rubycycle.vercel.app/">
              <div className="icon">
                <img src="/file.png" alt="file" />
                <span>RubyCycle</span>
              </div>
            </a>
          </div>
        </Window>
      )}
      {openWindows.includes("cv") && (
        <Window title="CV" onClose={() => closeWindow("cv")}>
          <a href="./Priscilla-CV.pdf" download className="cvLink">
            <div className="icon">
              <img src="/file.png" alt="file" />
              <span>CV.pdf</span>
            </div>
          </a>
        </Window>
      )}
      {openWindows.includes("settings") && (
        <Window title="Settings" onClose={() => closeWindow("settings")}>
          <p>Settings coming soon...</p>
        </Window>
      )}
      {openWindows.includes("contact") && (
        <Window title="Contact" onClose={() => closeWindow("contact")}>
          <p>Email: macgatuspriscilla@gmail.com</p>
        </Window>
      )}
    </div>
  );
}

export default App;
