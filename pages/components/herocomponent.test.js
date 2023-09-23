import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroComponent from './HeroComponent';

test('renders HeroComponent and checks for title, image and description', async () => {
  const mockProps = {
    title: 'Test title',
    image: 'http://test.image.com',
    description: 'Test description',
  };
  
  render(<HeroComponent {...mockProps} />);

  // Check if title, image and description are found in the document.
  const titleElement = screen.getByRole('heading', {name: /test title/i});
  const imgElement = screen.getByRole('img', {name: /hero image/i});
  const descElement = screen.getByText(/test description/i);

  // Use the waitFor method to wait for any changes to happen
  await waitFor(() => {
    expect(titleElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', 'http://test.image.com');
    expect(descElement).toBeInTheDocument();
  });
});