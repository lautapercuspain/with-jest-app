import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeroComponent from './HeroComponent';

afterEach(cleanup);

test('Render HeroComponent', () => {
  const { getByAltText, getByText } = render(
    <HeroComponent image="image.jpg" title="My Title" description="My Description" />
  );

  const imgElement = getByAltText('Hero Image');
  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveAttribute('src', 'image.jpg');

  const titleElement = getByText('My Title');
  expect(titleElement).toBeInTheDocument();

  const descriptionElement = getByText('My Description');
  expect(descriptionElement).toBeInTheDocument();
});
