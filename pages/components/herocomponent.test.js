import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroComponent from './HeroComponent';

test('renders HeroComponent with given props', () => {
  const { getByText } = render(
    <HeroComponent 
      image="hero.jpg" 
      title="Hero Title" 
      description="Hero Description"
    />
  );

  expect(getByText('Hero Title')).toBeInTheDocument();
  expect(getByText('Hero Description')).toBeInTheDocument();

  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', 'hero.jpg');
  expect(image).toHaveAttribute('alt', 'Hero Image');
});