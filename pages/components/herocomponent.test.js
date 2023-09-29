import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroComponent from './HeroComponent';

describe('HeroComponent', () => {
  it('should render the title, image and description', () => {
    const image = 'hero.jpg';
    const title = 'Welcome to the website';
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    
    render(<HeroComponent image={image} title={title} description={description} />);
    
    const titleElement = screen.getByText(title);
    const imageElement = screen.getByAltText('Hero Image');
    const descriptionElement = screen.getByText(description);
    
    expect(titleElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});

