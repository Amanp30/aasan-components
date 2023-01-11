import React from "react";
import css from "../../styles/timelineone.module.css";

function timeline({ data }) {
  return (
    <>
      <ul className={css.timelineul}>
        {data?.map((item, index) => {
          return (
            <>
              <li key={index} className={css.timelineli}>
                <h2>{item.heading}</h2>
                <span>{item.year}</span>
                <p>{item.description}</p>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default timeline;
