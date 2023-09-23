import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroComponent from './HeroComponent';

describe('HeroComponent', () => {
  const props = {
    image: 'hero-image.jpg',
    title: 'Hero Title',
    description: 'Hero Description',
  };

  test('renders HeroComponent with provided props', async () => {
    render(<HeroComponent {...props} />);

    const heroImage = await waitFor(() => screen.getByRole('img'));
    expect(heroImage).toHaveAttribute('src', 'hero-image.jpg');
    expect(heroImage).toHaveAttribute('alt', 'Hero Image');

    const heroTitle = screen.getByText(props.title);
    expect(heroTitle).toBeInTheDocument();

    const heroDescription = screen.getByText(props.description);
    expect(heroDescription).toBeInTheDocument();
  });
});