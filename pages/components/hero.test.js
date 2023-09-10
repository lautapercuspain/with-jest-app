import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Hero from './Hero';

describe('Hero Component', () => {
  afterEach(cleanup);

  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

  test('should render with given props', () => {
    const { getByRole, getByText } = render(
      <Hero title="Test Title" subtitle="Test Subtitle" images={images} />
    );

    expect(getByRole('img')).toHaveAttribute('src', images[0]);
    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test Subtitle')).toBeInTheDocument();
  });

  test('should switch to next image when next button clicked', () => {
    const { getByRole, getByText } = render(
      <Hero title="Test Title" subtitle="Test Subtitle" images={images} />
    );

    fireEvent.click(getByText('Next'));
    expect(getByRole('img')).toHaveAttribute('src', images[1]);
  });

  test('should switch to previous image when previous button clicked', () => {
    const { getByRole, getByText } = render(
      <Hero title="Test Title" subtitle="Test Subtitle" images={images} />
    );

    fireEvent.click(getByText('Previous'));
    expect(getByRole('img')).toHaveAttribute('src', images[2]);
  });
});