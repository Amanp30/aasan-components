import React from "react";

function mobileshare() {
  function handleShare(url, title, text) {
    if (typeof window !== "undefined" && navigator.share) {
      navigator.share({
        title: title,
        text: text,
        url: url,
      });
    }
  }

  return (
    <div>
      <button onClick={(e) => handleShare("", "The title", "The text")}>
        SHare
      </button>
    </div>
  );
}

export default mobileshare;
