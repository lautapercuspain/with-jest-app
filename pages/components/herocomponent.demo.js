import React from 'react';
import { render, screen, waitFor, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroComponent from './HeroComponent';

describe('HeroComponent', () => {
  it('renders without crashing', () => {
    const mockProps = {
      image: 'testImage.jpg',
      title: 'Test Title',
      description: 'Test Description',
    };
    
    render(<HeroComponent {...mockProps} />);
    
    const heroImage = screen.getByRole('img', { name: 'Hero Image' });
    expect(heroImage).toHaveAttribute('src', 'testImage.jpg');
    
    const heroTitle = screen.getByText('Test Title', {exact: false});
    expect(heroTitle).toBeInTheDocument();
    
    const heroDescription = screen.getByText('Test Description', {exact: false});
    expect(heroDescription).toBeInTheDocument();
  });
});
