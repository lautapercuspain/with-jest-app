import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroComponent from './HeroComponent';

describe('HeroComponent', () => {
  const props = {
    image: 'path/to/image.jpg',
    title: 'Hero Title',
    description: 'Hero Description',
  };

  it('should render the correct title', () => {
    render(<HeroComponent {...props} />);
    const titleElement = screen.getByText(props.title);
    expect(titleElement).toBeInTheDocument();
  });

  it('should render the correct image', () => {
    render(<HeroComponent {...props} />);
    const imageElement = screen.getByRole('img', { name: 'Hero Image' });
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toContain(props.image);
  });

  it('should render the correct description', () => {
    render(<HeroComponent {...props} />);
    const descriptionElement = screen.getByText(props.description);
    expect(descriptionElement).toBeInTheDocument();
  });
});
