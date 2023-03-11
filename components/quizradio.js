import React from "react";

function Quizradio({ options, state, setstate }) {
  return (
    <>
      {options.map((item) => {
        return (
          <>
            <input
              type="radio"
              value={item}
              name="jsquiz"
              checked={state !== "" ? true : false}
              onClick={(e) => setstate(e.target.value)}
            />
            <label>{item}</label>
            <br />
          </>
        );
      })}
    </>
  );
}

export default Quizradio;
