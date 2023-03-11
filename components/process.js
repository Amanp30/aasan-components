import React from "react";
import css from "../styles/process.module.css";
function Process({ data }) {
  return (
    <>
      <div className={css.process_container}>
        {data.map((item, index) => {
          return (
            <div className={css.process}>
              <img src={item.image} />
              <span
                className={
                  index === 0
                    ? `${css.firstchild}`
                    : index === data.length - 1
                    ? `${css.lastchild}`
                    : ""
                }
              >
                {index + 1}
              </span>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Process;
