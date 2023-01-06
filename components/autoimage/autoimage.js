import React, { useState, useEffect } from "react";

function autoimage({ images, theid, seconds, theclass, alts, title }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((index) =>
        index + 1 < images.length ? index + 1 : 0
      );
    }, seconds * 1000);
    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key !== " ") {
        return;
      }
      setCurrentImageIndex((index) =>
        index + 1 < images.length ? index + 1 : 0
      );
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [images]);

  const handleClick = () => {
    setCurrentImageIndex((index) =>
      index + 1 < images.length ? index + 1 : 0
    );
  };

  return (
    <img
      className={theclass}
      alt={alts[currentImageIndex]}
      id={theid}
      src={images[currentImageIndex]}
      onClick={handleClick}
      title={title[currentImageIndex]}
    />
  );
}

export default autoimage;
