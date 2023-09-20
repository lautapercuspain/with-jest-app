import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { fireEvent } from '@testing-library/user-event';
import HeroComponent from './HeroComponent';

afterEach(() => {
  cleanup();
});

test('renders HeroComponent', () => {
  render(<HeroComponent image={"image.jpg"} title={"Title"} description={"Description"} />);
  
  const titleElement = screen.getByRole('heading', { name: /Title/i });
  expect(titleElement).toBeInTheDocument();
  
  const imageElement = screen.getByRole('img', { name: /Hero Image/i });
  expect(imageElement).toHaveAttribute('src', 'image.jpg');
  
  const descriptionElement = screen.getByText(/Description/i, {exact: false});
  expect(descriptionElement).toBeInTheDocument();
});