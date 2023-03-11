import React from "react";
import Process from "../components/process";

function process() {
  var data = [
    {
      text: "SORTING",
      image: "http://www.lavenderindia.com/public/img/i1.webp",
    },
    {
      text: "REMOVING OF STAINS",
      image: "http://www.lavenderindia.com/public/img/i2.webp",
    },
    {
      text: "WASHING",
      image: "http://www.lavenderindia.com/public/img/i3.webp",
    },
    {
      text: "DRYING",
      image: "http://www.lavenderindia.com/public/img/i4.webp",
    },
    {
      text: "IRONING",
      image: "http://www.lavenderindia.com/public/img/i5.webp",
    },
    {
      text: "FOLDING AND FINISHING",
      image: "http://www.lavenderindia.com/public/img/i6.webp",
    },
  ];
  return (
    <>
      <div
        style={{
          padding: "4em",
          background:
            "url(http://www.lavenderindia.com/public/css/img/pattern-bg.jpg)",
        }}
      >
        <h1
          style={{ margin: "2em auto", textAlign: "center", color: "#6e56a5" }}
        >
          The life of linen
        </h1>
        <Process data={data} />
      </div>
    </>
  );
}

export default process;
