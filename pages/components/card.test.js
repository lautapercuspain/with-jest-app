import React from 'react';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

afterEach(cleanup);

test('renders card with given props', () => {
  const { getByRole } = render(<Card imageUrl="test.jpg" title="Test Title" description="Test Description" />);

  const img = getByRole('img');
  expect(img).toHaveAttribute('src', 'test.jpg');
  expect(img).toHaveAttribute('alt', 'Test Title');

  const title = getByRole('heading');
  expect(title).toHaveTextContent('Test Title');

  const description = getByRole('paragraph');
  expect(description).toHaveTextContent('Test Description');
});

test('renders card with different props', () => {
  const { getByRole } = render(<Card imageUrl="other.jpg" title="Other Title" description="Other Description" />);

  const img = getByRole('img');
  expect(img).toHaveAttribute('src', 'other.jpg');
  expect(img).toHaveAttribute('alt', 'Other Title');

  const title = getByRole('heading');
  expect(title).toHaveTextContent('Other Title');

  const description = getByRole('paragraph');
  expect(description).toHaveTextContent('Other Description');
});

test('card does not update with props', () => {
  const { getByRole, rerender } = render(<Card imageUrl="test.jpg" title="Test Title" description="Test Description" />);

  const img = getByRole('img');
  expect(img).toHaveAttribute('src', 'test.jpg');
  expect(img).toHaveAttribute('alt', 'Test Title');

  rerender(<Card imageUrl="other.jpg" title="Other Title" description="Other Description" />);

  expect(img).toHaveAttribute('src', 'test.jpg');
  expect(img).toHaveAttribute('alt', 'Test Title');
});