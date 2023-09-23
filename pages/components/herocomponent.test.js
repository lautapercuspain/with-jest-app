import React from 'react';
import { render, fireEvent, waitFor, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroComponent from './HeroComponent';

// Mock data to pass
const heroProps = {
  image: 'image.jpg',
  title: 'Hero Title',
  description: 'Hero Description'
};

afterEach(cleanup);

describe('HeroComponent', () => {
  it('renders title, image and description correctly', async() => {
    render(<HeroComponent {...heroProps} />);

    await waitFor(() => {
      // Test title
      const titleNode = screen.getByText(heroProps.title);
      expect(titleNode).toBeInTheDocument();

      // Test image
      const imageNode = screen.getByRole('img');
      expect(imageNode).toBeInTheDocument();
      expect(imageNode).toHaveAttribute('src', heroProps.image);

      // Test description
      const descriptionNode = screen.getByText(heroProps.description);
      expect(descriptionNode).toBeInTheDocument();
    });
  });
});