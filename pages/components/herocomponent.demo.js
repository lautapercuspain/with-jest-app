import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroComponent from './HeroComponent';

describe('HeroComponent', () => {
  const mockProps = {
    image: 'testImage.jpg',
    title: 'Test Title',
    description: 'Test Description'
  };

  it('renders image correctly', async () => {
    render(<HeroComponent {...mockProps} />);
    const imageNode = await waitFor(() => screen.getByRole('img'));
    expect(imageNode).toHaveAttribute('src', mockProps.image);
  });

  it('renders title correctly', async () => {
    render(<HeroComponent {...mockProps} />);
    const titleNode = await waitFor(() => screen.getByRole('heading'));
    expect(titleNode).toHaveTextContent(mockProps.title);
  });

  it('renders description correctly', async () => {
    render(<HeroComponent {...mockProps} />);
    const descriptionNode = await waitFor(() => screen.getByText(mockProps.description));
    expect(descriptionNode).toBeInTheDocument();
  });
});