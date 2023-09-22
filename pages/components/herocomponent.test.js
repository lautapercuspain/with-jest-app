import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroComponent from './HeroComponent';

describe('HeroComponent', () => {
  afterEach(cleanup);

  const props = {
    image: "testImage.jpg",
    title: "Test Title",
    description: "Test Description",
  }

  test('should render without crash', () => {
    render(<HeroComponent {...props} />);
  });

  test('should display correct title', () => {
    const { getByText } = render(<HeroComponent {...props} />);
    expect(getByText(props.title)).toBeInTheDocument();
  });

  test('should display correct image', () => {
    const { getByAltText } = render(<HeroComponent {...props} />);
    expect(getByAltText("Hero Image")).toHaveAttribute('src', props.image);
  });

  test('should display correct description', () => {
    const { getByText } = render(<HeroComponent {...props} />);
    expect(getByText(props.description)).toBeInTheDocument();
  });

});
