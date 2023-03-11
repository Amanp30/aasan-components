import React, { useState } from "react";

function Quizcheck({ correct, selected, info, another }) {
  const [openpopup, setopenpopup] = useState(false);

  const loadanother = () => {
    return (
      <>
        <button
          onClick={(e) => {
            another();
            setopenpopup(false);
          }}
        >
          Another Question
        </button>
      </>
    );
  };

  return (
    <>
      {openpopup ? (
        <>
          <div className="thepopup">
            {correct === selected ? (
              <>
                You are right <br />
                {info}
                {loadanother()}
              </>
            ) : (
              <>
                "wrong"{info}
                {loadanother()}
              </>
            )}
          </div>
        </>
      ) : (
        <button
          className={selected === "" ? "check disabled" : "check"}
          disabled={selected === "" ? true : false}
          onClick={(e) => setopenpopup(true)}
        >
          Check Answer
        </button>
      )}
    </>
  );
}

export default Quizcheck;
