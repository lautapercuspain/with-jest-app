import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import Hero from './Hero';

afterEach(cleanup);

const images = [
  'https://image1.png',
  'https://image2.png',
  'https://image3.png'
];

describe('Hero', () => {
  test('renders Hero component with initial image', () => {
    render(<Hero title="Hero Title" subtitle="Hero Subtitle" images={images} />);
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://image1.png');
  });

  test('navigates to next image on clicking next', () => {
    render(<Hero title="Hero Title" subtitle="Hero Subtitle" images={images} />);
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://image2.png');
  });

  test('navigates to previous image on clicking previous', () => {
    render(<Hero title="Hero Title" subtitle="Hero Subtitle" images={images} />);
    fireEvent.click(screen.getByText('Previous'));
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://image3.png');
  });

  test('navigates back to first image after the last one', () => {
    render(<Hero title="Hero Title" subtitle="Hero Subtitle" images={images} />);
    fireEvent.click(screen.getByText('Next'));
    fireEvent.click(screen.getByText('Next'));
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://image1.png');
  });

  test('navigates to the last image from first one', () => {
    render(<Hero title="Hero Title" subtitle="Hero Subtitle" images={images} />);
    fireEvent.click(screen.getByText('Previous'));
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://image3.png');
  });
});