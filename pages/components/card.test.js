import React from 'react';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  afterEach(cleanup);

  it('renders title and content', () => {
    const { getByText } = render(
      <Card title="Test Title" content="Test Content" />
    );
    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('renders image when imageUrl is provided', () => {
    const { getByRole } = render(
      <Card title="Test Title" content="Test Content" imageUrl="test-image.jpg" />
    );
    const img = getByRole('img');
    expect(img).toHaveAttribute('src', 'test-image.jpg');
    expect(img).toHaveAttribute('alt', 'Test Title');
  });

  it('does not render image when imageUrl is not provided', () => {
    const { queryByRole } = render(
      <Card title="Test Title" content="Test Content" />
    );
    const img = queryByRole('img');
    expect(img).toBeNull();
  });
});