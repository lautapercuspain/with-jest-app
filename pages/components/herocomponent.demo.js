import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroComponent from './HeroComponent';

describe('HeroComponent', () => {
  const props = {
    image: 'hero.jpg',
    title: 'Hero Title',
    description: 'Hero Description',
  };

  test('renders correctly', async () => {
    render(<HeroComponent {...props} />);
    
    const titleElement = screen.getByText(/Hero Title/i, {exact: false});
    const descriptionElement = screen.getByText(/Hero Description/i, {exact: false});
    const imageElement = screen.getByRole('img');
    
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'hero.jpg');
  });
});