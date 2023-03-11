import React from "react";
import Process from "../components/process";

function process() {
  var data = [
    {
      text: "SORTING",
      image: "/static/process/p1.webp",
    },
    {
      text: "REMOVING OF STAINS",
      image: "/static/process/p2.webp",
    },
    {
      text: "WASHING",
      image: "/static/process/p3.webp",
    },
    {
      text: "DRYING",
      image: "/static/process/p4.webp",
    },
    {
      text: "IRONING",
      image: "/static/process/p5.webp",
    },
    {
      text: "FOLDING AND FINISHING",
      image: "/static/process/p6.webp",
    },
  ];
  return (
    <>
      <div
        style={{
          padding: "4em",
          background: "url(/static/process/background.jpg)",
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
