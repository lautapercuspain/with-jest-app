import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroComponent from './HeroComponent';

describe('HeroComponent', () => {
  const props = {
    image: 'path/to/image',
    title: 'Test Title',
    description: 'Test Description',
  };

  test('renders correctly', () => {
    render(<HeroComponent {...props} />);

    const titleElement = screen.getByRole('heading', { name: /Test Title/i });
    const imageElement = screen.getByAltText('Hero Image');
    const descriptionElement = screen.getByText(/Test Description/i);

    expect(titleElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});