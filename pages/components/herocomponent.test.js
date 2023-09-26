import React from 'react';
import { render } from '@testing-library/react';
import HeroComponent from './HeroComponent';

describe('HeroComponent', () => {
  const props = {
    image: 'path/to/image',
    title: 'Test Title',
    description: 'Test Description',
  };

  it('renders correctly', () => {
    const { getByRole, getByText } = render(<HeroComponent {...props} />);

    const hero = getByRole('div', { name: 'Hero Component' });
    const title = getByText(props.title);
    const image = getByRole('img', { name: 'Hero Image' });
    const description = getByText(props.description);

    expect(hero).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});