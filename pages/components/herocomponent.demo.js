import React from 'react';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import HeroComponent from './HeroComponent';

afterEach(cleanup);

describe('HeroComponent', () => {
  it('renders with correct image, title and description', async () => {
    const mockProps = {
      image: 'test-image.jpg',
      title: 'Test Title',
      description: 'Test Description'
    };

    render(<HeroComponent {...mockProps} />);

    await waitFor(() => {
      const image = document.querySelector('img');
      expect(image).toHaveAttribute('src', 'test-image.jpg');
      expect(image).toHaveAttribute('alt', 'Hero Image');

      const title = document.querySelector('h1');
      expect(title).toHaveTextContent('Test Title');

      const description = document.querySelector('p');
      expect(description).toHaveTextContent('Test Description');
    });
  });
});