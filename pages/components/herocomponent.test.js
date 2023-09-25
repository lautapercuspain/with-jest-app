import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroComponent from './HeroComponent';

describe('HeroComponent', () => {
  const props = {
    image: 'heroImage.jpg',
    title: 'Hero Title',
    description: 'Hero Description',
  };

  it('renders the hero component correctly', () => {
    render(<HeroComponent {...props} />);

    const titleElement = screen.getByText(props.title);
    const imageElement = screen.getByRole('img', { name: /hero image/i });
    const descriptionElement = screen.getByText(props.description);

    expect(titleElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});