import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import Hero from './Hero';

afterEach(cleanup);

describe('<Hero />', () => {
  const props = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    images: ['image1.jpg', 'image2.jpg', 'image3.jpg']
  };

  test('renders Hero component and checks for title and subtitle', () => {
    render(<Hero {...props} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.subtitle)).toBeInTheDocument();
  });

  test('changes image on Next button click', async () => {
    render(<Hero {...props} />);

    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);

    expect(screen.getByRole('img')).toHaveAttribute('src', props.images[1]);
  });

  test('changes image on Previous button click', async () => {
    render(<Hero {...props} />);
    
    const previousButton = screen.getByRole('button', { name: /previous/i });
    fireEvent.click(previousButton);

    expect(screen.getByRole('img')).toHaveAttribute('src', props.images[props.images.length - 1]);
  });
});
