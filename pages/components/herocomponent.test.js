import React from 'react';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroComponent from './HeroComponent';

describe('HeroComponent', () => {
  afterEach(() => cleanup());

  it('renders successfully', async () => {
    const mockProps = {
      image: 'hero-image.jpg',
      title: 'Hero Title',
      description: 'Hero description',
    }; 

    render(<HeroComponent {...mockProps} />);

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /hero title/i })).toBeInTheDocument();
      expect(screen.getByRole('img', { name: /hero image/i })).toBeInTheDocument();
      expect(screen.getByText(/hero description/i)).toBeInTheDocument();
    });
  });
});

