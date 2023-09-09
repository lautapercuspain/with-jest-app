import React, { useState } from 'react';

const Hero = ({ title, subtitle, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="hero">
      <div className="slider">
        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
        <button onClick={previousImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;
