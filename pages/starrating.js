import React, { useState } from "react";
import Rating from "../components/starrating";
function starrating() {
  const [rating, setrating] = useState(1);
  return (
    <div style={{ position: "fixed", top: "30%", left: "40%" }}>
      <Rating initialRating={rating} setRating={setrating} />
      Rating - {rating}
      <p>Hover over star to change rating</p>
    </div>
  );
}

export default starrating;
