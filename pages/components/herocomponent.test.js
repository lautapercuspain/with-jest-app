import React from 'react';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroComponent from './HeroComponent';

describe('HeroComponent', () => {
  afterEach(cleanup);

  const heroProps = {
    image: 'hero.jpg',
    title: 'Hero Title',
    description: 'Hero Description'
  };

  test('renders HeroComponent with given props', async () => {
    render(<HeroComponent {...heroProps} />);

    await waitFor(() => {
      // Check the title
      const titleNode = screen.getByRole('heading', { level: 1 });
      expect(titleNode).toHaveTextContent(heroProps.title);

      // Check the image
      const imageNode = screen.getByRole('img');
      expect(imageNode).toHaveAttribute('src', heroProps.image);
      expect(imageNode).toHaveAttribute('alt', 'Hero Image');

      // Check the description
      const descriptionNode = screen.getByText(heroProps.description);
      expect(descriptionNode).toBeInTheDocument();
    });
  });
});