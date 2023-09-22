import React from 'react';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroComponent from './HeroComponent';

describe('HeroComponent', () => {
  afterEach(cleanup);

  const props = {
    image: 'http://example.com/image.jpg',
    title: 'Test Title',
    description: 'Test Description'
  };

  it('renders HeroComponent with given props', async () => {
    render(<HeroComponent {...props} />);

    const titleElement = screen.getByRole('heading', { name: /Test Title/i });
    const imageElement = screen.getByRole('img', { name: /Hero Image/i });
    const descriptionElement = screen.getByText(/Test Description/i);

    await waitFor(() => {
      expect(titleElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute('src', 'http://example.com/image.jpg');
      expect(descriptionElement).toBeInTheDocument();
    });
  });
});