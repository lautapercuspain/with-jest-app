import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroComponent from './HeroComponent';

describe('HeroComponent', () => {
  const props = {
    image: 'image-url',
    title: 'Test Title',
    description: 'Test Description',
  };

  it('should render the title, image, and description', () => {
    render(<HeroComponent {...props} />);

    const titleElement = screen.getByText('Test Title');
    const imageElement = screen.getByAltText('Hero Image');
    const descriptionElement = screen.getByText('Test Description');

    expect(titleElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});