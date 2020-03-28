import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./App.css";

function App() {
  const [playing, setPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <div className="container">
        <div className="title">どうしても盛り上がってしまう</div>
        <div className="title-big">ボタン</div>

        <div className="buttons">

        <div
          className="button"
          onClick={() => {
            setIsOpen(true);
            setPlaying(true);
            setInterval(() => {
              setPlaying(false);
              setIsOpen(false);
            }, 7000);
          }}
        >
          PUSH START
        </div>

        <div
          className="money"
        >
          課金
        </div>
        </div>

        <ReactPlayer
          className="player"
          url="/congratulations.m4a"
          playing={playing}
          loop={false}
        />
      </div>

      <div className={["congra", isOpen ? "show" : ""].join(" ")}>
        <img src="/congraturation_image.png" alt="congra" className="congra-image"/>
      </div>
    </div>
  );
}

export default App;
