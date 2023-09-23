import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroComponent from './HeroComponent';

describe('HeroComponent', () => {
  it('should render with given props', async () => {
    render(
      <HeroComponent
        image="https://example.com/hero.jpg"
        title="Test Hero"
        description="This is a test hero"
      />
    );

    const titleNode = screen.getByText('Test Hero');
    const imageNode = screen.getByRole('img', { name: "Hero Image" });
    const descriptionNode = screen.getByText('This is a test hero');

    waitFor(() => {
      expect(titleNode).toBeInTheDocument();
      expect(imageNode).toHaveAttribute('src', 'https://example.com/hero.jpg');
      expect(descriptionNode).toBeInTheDocument();
    });
  });
});