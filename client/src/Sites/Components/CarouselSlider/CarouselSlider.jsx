// Carousel.jsx
import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ featureCards }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === featureCards.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? featureCards.length - 1 : prevSlide - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {featureCards.map((card, index) => (
          <div
            key={index}
            className={`carousel-card ${
              index === currentSlide ? "active" : ""
            }`}
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`,
            }}
          >
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
        <button className="carousel-button prev" onClick={handlePrev}>
        &#8592;
      </button>
      <button className="carousel-button next" onClick={handleNext}>
        &#8594;
      </button>
      </div>
      
      <div className="carousel-dots">
        {featureCards.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
