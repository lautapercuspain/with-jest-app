import React from 'react';
import { render } from '@testing-library/react';
import HeroComponent from './HeroComponent';

describe('HeroComponent', () => {
  const props = {
    image: 'path/to/image.png',
    title: 'Test Title',
    description: 'Test Description',
  };

  test('renders the component with correct props', () => {
    const { getByText, getByAltText } = render(
      <HeroComponent {...props} />
    );

    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByAltText('Hero Image')).toBeInTheDocument();
    expect(getByText(props.description)).toBeInTheDocument();
  });
});

Note: Make sure to import the necessary packages and modules required for the test, such as `render` from `@testing-library/react` and `HeroComponent` from the correct file location.