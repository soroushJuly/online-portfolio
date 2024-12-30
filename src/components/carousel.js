"use client";

import { useState, useEffect } from "react";
import "./carousel.css";

const Carousel = ({ items, interval = 2000, isRotating }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically advance to the next item based on the interval
  useEffect(() => {
    if (!isRotating) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(timer); // Clear interval on unmount
  }, [interval, items.length]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel mt-2">
      <div className="carousel-wrapper space-x-3">
        {items.map((item, index) => (
          <div
            key={index}
            //   className={`carousel-item ${index === currentIndex ? "active" : ""}`}
            className={`carousel-item active`}
            style={{
              transform: `translateX(${10 * (index - currentIndex * (items.length + 1))}%)`,
              transition: "transform 0.5s ease",
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <button onClick={prevSlide} className="carousel-button left">
        <span className="material-icons carousel-button__text">
          chevron_left
        </span>
      </button>
      <button onClick={nextSlide} className="carousel-button right">
        <span className="material-icons carousel-button__text">
          chevron_right
        </span>
      </button>
    </div>
  );
};

export default Carousel;
