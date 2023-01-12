import React from "react";
import Tooltip from "../components/tooltip/tooltip";
function tooltipcomponent() {
  return (
    <>
      <div className="magicalcontainer">
        <div>
          {`loremloremloremlorem lorem loremloremlorem loremlorem
          loremloremloremlorem lorem loremloremloremloremloremloremlorem
          loremloremlorem`.repeat(50)}
        </div>

        <Tooltip text="Voila! working tooltiptooltiptooltiptool tooltiptooltiptooltiptool tooltiptooltiptooltiptool tip tooltiptooltiptool tiptooltiptooltip" />
        <div style={{ background: "red" }}>Hover over this icon</div>
        <div>
          {`loremloremloremlorem lorem loremloremlorem loremlorem
          loremloremloremlorem lorem loremloremloremloremloremloremlorem
          loremloremlorem`.repeat(50)}
        </div>
      </div>
    </>
  );
}

export default tooltipcomponent;
