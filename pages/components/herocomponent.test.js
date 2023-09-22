import React from 'react';
import { render, fireEvent, waitFor, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroComponent from './HeroComponent';

afterEach(cleanup);

test('renders HeroComponent without crashing', () => {
  const { getByText } = render(<HeroComponent title="Test Title" description="Test Description" image="image.jpg" />);
  expect(getByText('Test Title')).toBeInTheDocument();
});

test('renders image correctly', () => {
  const { getByAltText } = render(<HeroComponent title="Test Title" description="Test Description" image="image.jpg" />);
  expect(getByAltText('Hero Image')).toHaveAttribute('src', 'image.jpg');
});

test('renders description correctly', () => {
  const { getByText } = render(<HeroComponent title="Test Title" description="Test Description" image="image.jpg" />);
  expect(getByText('Test Description')).toBeInTheDocument();
});