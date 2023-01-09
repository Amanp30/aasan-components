import React, { useState } from "react";
import css from "../../styles/accordian.module.css";

function accordion({ title, text }) {
  const [expanded, setExpanded] = useState(false);

  function handleClick() {
    setExpanded(!expanded);
  }

  return (
    <div
      className={`${css.aasanaccordian} ${
        expanded ? css.aasanaccordian_expanded : ""
      }`}
    >
      <div onClick={handleClick} className={css.aasantitle}>
        {title} <span className={css.arrows}>{expanded ? "▲" : "▼"}</span>
      </div>
      {expanded && (
        <div className={css.aasantext}>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}

export default accordion;
