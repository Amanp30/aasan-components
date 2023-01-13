import React, { useEffect } from "react";
import css from "../../styles/popyoutube.module.css";
import dynamic from "next/dynamic";
import { Oval } from "react-loader-spinner";
const Youtube = dynamic(() => import("./youtubewatch"), {
  ssr: false,
  loading: () => (
    <Oval
      height={80}
      width={80}
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  ),
});

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
        <Youtube url={url} width="800px" height={"480px"} />
        <button className={css.cloasebtn} onClick={(e) => close(false)}>
          X <span style={{ width: "8px !important" }}>esc</span>
        </button>
      </div>
    </>
  );
}

export default popyoutube;
