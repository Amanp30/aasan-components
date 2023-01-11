import React from "react";
import css from "../../styles/timelineone.module.css";

function timeline({ data }) {
  return (
    <>
      <div className={css.timelineone}>
        <div className={css.timelined}>
          <div className={css.timelineimgbox}>
            <img src={data?.[0]?.image} />
          </div>
          <h2>{data?.[0]?.title}</h2>
        </div>
        <ul className={css.timelineul}>
          {data?.[1].timelines?.map((item, index) => {
            return (
              <>
                <li key={index} className={css.timelineli}>
                  <h3>{item.heading}</h3>
                  <span>{item.year}</span>
                  <p>{item.description}</p>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default timeline;
