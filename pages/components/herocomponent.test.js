import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroComponent from './HeroComponent';

describe('HeroComponent', () => {
  test('renders HeroComponent with a title, image and description', () => {
    const mockProps = {
      title: 'Hero Title',
      image: 'hero-image.jpg',
      description: 'Hero Description',
    };
    
    render(<HeroComponent {...mockProps} />);
    
    screen.getByRole('heading', { name: /hero title/i });
    screen.getByRole('img', { name: /hero image/i });
    screen.getByText(/hero description/i);
  });

  test('it should not render HeroComponent without passed props', () => {
    const { container } = render(<HeroComponent />);

    expect(container.firstChild).toBeNull();
  });
});