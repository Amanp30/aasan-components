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
        <CustomVideo
          src="/static/backbone.mp4"
          title="backbone"
          poster={
            "https://www.bing.com/th?id=OVP.cK83i4fckXMdKjYQ_HOfUAHgFo&w=606&h=340&c=7&rs=2&qlt=90&o=6&dpr=1.1&pid=1.7&rm=2"
          }
        />
      </div>
    </div>
  );
};

export default App;
