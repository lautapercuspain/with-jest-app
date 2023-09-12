import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Component', () => {

  const testProps = {
    title: 'Test Hero',
    subtitle: 'Test Hero Subtitle',
    images: ['test1.png', 'test2.png', 'test3.png']
  };

  it('should render the hero with title and subtitle', () => {
    render(<Hero {...testProps} />);
    const titleNode = screen.getByText(testProps.title);
    const subtitleNode = screen.getByText(testProps.subtitle);
    expect(titleNode).toBeInTheDocument();
    expect(subtitleNode).toBeInTheDocument();
  });

  it('should display the correct initial image', () => {
    render(<Hero {...testProps} />);
    const imageNode = screen.getByRole('img');
    expect(imageNode).toHaveAttribute('src', testProps.images[0]);
  });

  it('should switch to the next image when next button is clicked', async () => {
    render(<Hero {...testProps} />);
    const nextButtonNode = screen.getByText('Next');
    fireEvent.click(nextButtonNode);

    await waitFor(() => {
      const imageNode = screen.getByRole('img');
      expect(imageNode).toHaveAttribute('src', testProps.images[1]);
    });
  });

  it('should switch to the previous image when previous button is clicked', async () => {
    render(<Hero {...testProps} />);
    const prevButtonNode = screen.getByText('Previous');
    fireEvent.click(prevButtonNode);

    await waitFor(() => {
      const imageNode = screen.getByRole('img');
      expect(imageNode).toHaveAttribute('src', testProps.images[testProps.images.length-1]);
    });
  });

});
