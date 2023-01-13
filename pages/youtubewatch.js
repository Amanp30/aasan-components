import React from "react";
import Youtube from "../components/youtube/youtubewatch";
function youtubewatch() {
  return (
    <>
      <div style={{ "margin-top": "5em" }}></div>
      <Youtube
        url="https://www.youtube.com/watch?v=rcQ_xZdzPBc"
        width={"560"}
        height={"315"}
        autoplay={1}
        start={12}
        controls
        color={"white"}
      />
    </>
  );
}

export default youtubewatch;
