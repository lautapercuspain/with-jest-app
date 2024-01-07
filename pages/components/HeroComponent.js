import React from 'react';

const HeroComponent = ({ image, title, description }) => {
  return (
    <div className="hero">
      <h1>{title}</h1>
      <img src={image} alt="Hero Image" />
      <p>{description}</p>
    </div>
  );
};

export default HeroComponent;