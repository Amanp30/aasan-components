import React from "react";
import Youtube from "../components/youtube/youtubewatch";
function youtubewatch() {
  return (
    <>
      <Youtube
        url="https://www.youtube.com/watch?v=l3JQHpacDC4"
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
