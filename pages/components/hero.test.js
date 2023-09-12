import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Hero from './Hero';

describe('Hero', () => {
  const mockImages = ['image1.png', 'image2.png', 'image3.png'];
  const mockTitle = 'Title';
  const mockSubtitle = 'Subtitle';
  const mockProps = { title: mockTitle, subtitle: mockSubtitle, images: mockImages };

  test('renders correctly', () => {
    render(<Hero {...mockProps} />);

    const displayedImage = screen.getByRole('img');
    expect(displayedImage).toHaveAttribute('src', mockImages[0]);

    const title = screen.getByText(mockTitle);
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByText(mockSubtitle);
    expect(subtitle).toBeInTheDocument();
  });

  test('navigates to next image', () => {
    render(<Hero {...mockProps} />);

    fireEvent.click(screen.getByText('Next'));

    const displayedImage = screen.getByRole('img');
    expect(displayedImage).toHaveAttribute('src', mockImages[1]);
  });

  test('navigates to previous image', () => {
    render(<Hero {...mockProps} />);

    fireEvent.click(screen.getByText('Previous'));

    const displayedImage = screen.getByRole('img');
    expect(displayedImage).toHaveAttribute('src', mockImages[2]);
  });
});
