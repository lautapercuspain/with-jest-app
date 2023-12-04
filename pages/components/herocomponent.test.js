import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroComponent from './HeroComponent';

describe('HeroComponent', () => {
  const image = 'path/to/image.jpg';
  const title = 'Test Title';
  const description = 'Test Description';

  beforeEach(() => {
    render(<HeroComponent image={image} title={title} description={description} />);
  });

  afterEach(() => {
    cleanup();
  });

  test('renders the title correctly', () => {
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the image correctly', () => {
    const imageElement = screen.getByRole('img');
    expect(imageElement).toHaveAttribute('src', image);
    expect(imageElement).toHaveAttribute('alt', 'Hero Image');
  });

  test('renders the description correctly', () => {
    const descriptionElement = screen.getByText(description);
    expect(descriptionElement).toBeInTheDocument();
  });
});