import React, { useState } from "react";

function StarRating({ initialRating, setRating }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => {
        const selected = value <= initialRating;
        return (
          <span
            key={value}
            onMouseEnter={(e) => setRating(value)}
            style={{ color: selected ? "orange" : "gray" }}
          >
            ☆
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;
