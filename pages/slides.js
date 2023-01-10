import React, { useState, useEffect } from "react";

function ImageSlider() {
  // create state variable to store current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // create array of objects to store image URLs and other slide information
  const slides = [
    {
      img: "/static/putin.jpg",
      title: "putin1",
      text: "This is putin1",
    },
    {
      img: "/static/putin2.jpg",
      title: "putin2",
      text: "This is putin2",
    },
    {
      img: "/static/putin.jpg",
      title: "putin3",
      text: "This is putin3",
    },
  ];

  // use useEffect hook to set interval for slideshow and update current slide index
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.img}
          alt={slide.title}
          className={index === currentSlide ? "active" : ""}
        />
      ))}
    </div>
  );
}

export default ImageSlider;
