import React, { useState, useEffect } from "react";
import css from "../styles/scrolltotop.module.css";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.scrollY > 100);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`${
        showScroll ? css.scroll_to_top + " " + css.show : css.scroll_to_top
      }`}
      onClick={scrollToTop}
    >
      <div className={css.scroll_to_top_circle}></div>
    </div>
  );
};

export default ScrollToTop;
