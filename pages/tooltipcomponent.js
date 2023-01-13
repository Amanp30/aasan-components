import React from "react";
import Tooltip from "../components/tooltip/tooltip";
function tooltipcomponent() {
  return (
    <>
      <div className="magicalcontainer">
        <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
          <div
            style={{
              float: "right",
              position: "fixed",
              top: "15%",
              left: "2em",
            }}
          >
            <Tooltip text="Voila top left tooltip is working perfectly" />
          </div>
          <div
            style={{
              float: "right",
              position: "fixed",
              right: "2em",
              top: "15%",
            }}
          >
            <Tooltip text="Voila top right tooltip is working perfectly" />
          </div>
          <div
            style={{ position: "fixed", top: "50%", left: "10%", right: "10%" }}
          >
            Click or hover over icons to see tooltip
          </div>
          <div
            style={{
              float: "right",
              position: "fixed",
              bottom: "15%",
              left: "2em",
            }}
          >
            <Tooltip text="Voila bottom left tooltip is working perfectly" />
          </div>
          <div
            style={{
              float: "right",
              position: "fixed",
              bottom: "15%",
              right: "2em",
            }}
          >
            <Tooltip text="Voila bottom right tooltip is working perfectly" />
          </div>
        </div>
      </div>
    </>
  );
}

export default tooltipcomponent;
