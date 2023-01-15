import React from "react";
import CustomVideo from "../components/videocomponent";
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
        <CustomVideo src="/static/backbone.mp4" title="backbone" />
      </div>
    </div>
  );
};

export default App;
