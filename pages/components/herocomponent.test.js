import React from 'react';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroComponent from './HeroComponent';

afterEach(cleanup);

test('renders HeroComponent correctly', async () => {
  const mockProps = {
    image: 'https://example.com/image.jpg',
    title: 'Test Title',
    description: 'Test Description',
  };
  
  render(<HeroComponent {...mockProps} />);
  
  const heroTitle = await waitFor(() => screen.getByRole('heading', {name: /Test Title/i}));
  const heroImage = await waitFor(() => screen.getByRole('img', {name: /Hero Image/i}));
  const heroDescription = await waitFor(() => screen.getByText(/Test Description/i));
  
  expect(heroTitle).toBeTruthy();
  expect(heroImage.src).toBe('https://example.com/image.jpg');
  expect(heroDescription).toBeTruthy();
});