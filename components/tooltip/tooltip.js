import React, { useState, useEffect } from "react";
import css from "../../styles/tooltip.module.css";

function Tooltip({ text }) {
  const [tipstate, settipstate] = useState(false);
  const [toolclass, settoolclass] = useState("");
  const [toolside, settoolside] = useState("");

  /*   var theclass = `prakatho` + toolclass + toolside;
   */
  const tooltipRef = React.createRef();
  useEffect(() => {
    if (!tooltipRef.current) {
      return;
    }

    var tipelement = tooltipRef.current.getBoundingClientRect();
    var viewportHeight = window.innerHeight;
    var viewportwidth = window.innerWidth;

    // cordinates.push({ vHeight: viewportHeight, vWidth: viewportwidth });

    var posX = tipelement.x;
    var posY = tipelement.y;
    if (posY <= viewportHeight / 2) {
      settoolclass("bottom");
    } else {
      settoolclass("top");
    }
    console.log(tipelement);
    if (posX <= viewportwidth / 2) {
      /* tooltipRef.current.style.width = "calc(100vw - 12vw)"; */
      settoolside("left");
    } else {
      settoolside("right");
      /*  tooltipRef.current.setProperty("--left", `2em`);
      tooltipRef.current.style.left = `-20em`;
      tooltipRef.current.style.width = `calc(100vw - ${12 * 5 + "vw"})`; */
    }
  }, [tipstate]);

  return (
    <>
      <div
        className={css.thetooltip}
        onMouseEnter={() => settipstate(!tipstate)}
        onMouseLeave={() => settipstate(!tipstate)}
      >
        <div
          ref={tooltipRef}
          className={
            tipstate ? css[`prakatho` + toolclass + toolside] : css.matho
          }
        >
          {text}
        </div>
        <span>
          <img src="/static/infoicon.svg" />
        </span>
      </div>
    </>
  );
}

export default Tooltip;
