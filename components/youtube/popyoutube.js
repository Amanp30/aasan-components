import React, { useEffect } from "react";
import Youtube from "./youtubewatch";
import css from "../../styles/popyoutube.module.css";

function popyoutube({ url, close }) {
  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === "Escape") {
        close(false);
      }
    }
    document.addEventListener("keyup", handleKeyPress);

    return () => {
      document.removeEventListener("keyup", handleKeyPress);
    };
  }, [close]);

  return (
    <>
      <div className={css.youtubepop}>
        <Youtube url={url} width="560px" height={"315px"} />
        <button className={css.cloasebtn} onClick={(e) => close(false)}>
          X <span style={{ width: "8px !important" }}>esc</span>
        </button>
      </div>
    </>
  );
}

export default popyoutube;
