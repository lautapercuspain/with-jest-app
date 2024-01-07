import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroComponent from './HeroComponent';

describe('HeroComponent', () => {
  const props = {
    image: 'path/to/image.jpg',
    title: 'Test Title',
    description: 'Test Description',
  };

  it('renders the component with correct props', () => {
    render(<HeroComponent {...props} />);

    const titleElement = screen.getByText(/Test Title/i);
    const imageElement = screen.getByAltText('Hero Image');
    const descriptionElement = screen.getByText(/Test Description/i);

    expect(titleElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();

    expect(titleElement.textContent).toBe('Test Title');
    expect(imageElement.src).toContain('path/to/image.jpg');
    expect(descriptionElement.textContent).toBe('Test Description');
  });
});
