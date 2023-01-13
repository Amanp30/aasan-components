import React, { useState } from "react";
import Popyoutube from "../components/youtube/popyoutube";

function watchvideo() {
  const [openvideo, setopenvideo] = useState(false);
  return (
    <div>
      {openvideo ? (
        <>
          <Popyoutube
            url="https://www.youtube.com/watch?v=rcQ_xZdzPBc"
            close={setopenvideo}
          />{" "}
        </>
      ) : (
        <>
          <button
            onClick={(e) => setopenvideo(true)}
            style={{
              position: "fixed",
              top: "45%",
              left: "45%",
              padding: "1em",
              width: "14em",
              borderRadius: "4em",
              background: "black",
              color: "white",
              fontWeight: "bold",
              letterSpacing: ".1em",
              boxShadow: "0 0 14px 3px crimson",
            }}
          >
            Watch Video
          </button>
        </>
      )}
    </div>
  );
}

export default watchvideo;
