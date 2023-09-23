import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroComponent from './HeroComponent';

describe('HeroComponent', () => {
  const mockProps = {
    image: 'mockImage.jpg',
    title: 'Mock Title',
    description: 'Mock Description',
  };

  it('renders title', async () => {
    render(<HeroComponent {...mockProps} />);
    const titleElement = screen.getByText('Mock Title');
    await waitFor(() => {
      expect(titleElement).toBeInTheDocument();
    });
  });

  it('renders description', async () => {
    render(<HeroComponent {...mockProps} />);
    const descriptionElement = screen.getByText('Mock Description');
    await waitFor(() => {
      expect(descriptionElement).toBeInTheDocument();
    });
  });

  it('renders image', async () => {
    render(<HeroComponent {...mockProps} />);
    const imageElement = screen.getByRole('img', { name: 'Hero Image' });
    await waitFor(() => {
      expect(imageElement).toHaveAttribute('src', 'mockImage.jpg');
      expect(imageElement).toHaveAltText('Hero Image');
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});