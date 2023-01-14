import React from "react";
import Audiocomponent from "../components/audiocomponent";
const App = () => {
  const width = typeof window !== "undefined" ? window.innerWidth : null;
  let styles = {};

  if (width >= 600) {
    styles = {
      width: "50em",
      margin: "auto",
      marginTop: "5em",
    };
  } else {
    styles = {
      width: "90%",
      margin: "auto",
      marginTop: "5em",
    };
  }

  return (
    <div>
      <div style={styles}>
        <Audiocomponent src="/static/sound.wav" />
      </div>
    </div>
  );
};

export default App;
