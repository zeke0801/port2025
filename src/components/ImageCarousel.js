import React, { useState } from 'react';
import '../styles/ImageCarousel.css';

const ImageCarousel = ({ images, dotsPosition = 'bottom' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index, e) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <img 
        src={images[currentIndex]} 
        alt={`Slide ${currentIndex + 1}`} 
        className="carousel-image"
      />
      
      <button 
        className="carousel-button prev" 
        onClick={handlePrevious}
        aria-label="Previous image"
      >
        ‹
      </button>
      
      <button 
        className="carousel-button next" 
        onClick={handleNext}
        aria-label="Next image"
      >
        ›
      </button>

      <div className={`carousel-dots ${dotsPosition}`}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={(e) => handleDotClick(index, e)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
