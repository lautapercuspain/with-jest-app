import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from './Hero';

const testProps = {
  title: 'Test Title',
  subtitle: 'Test Subtitle',
  images: ['/test1.jpg', '/test2.jpg', '/test3.jpg'],
};

beforeEach(() => {
  render(<Hero {...testProps} />);
});

afterEach(() => {
  cleanup();
});

test('renders Hero component with initial image', () => {
  const imageElem = screen.getByRole('img');
  expect(imageElem).toHaveAttribute('src', '/test1.jpg');
});

test('navigates to next image on clicking Next button', async () => {
  const nextBtn = screen.getByText(/next/i, {exact: false});
  fireEvent.click(nextBtn);
  const imageElem = screen.getByRole('img');
  expect(imageElem).toHaveAttribute('src', '/test2.jpg');
});

test('navigates to previous image on clicking Previous button', async () => {
  const prevBtn = screen.getByText(/previous/i, {exact: false});
  fireEvent.click(prevBtn);
  const imageElem = screen.getByRole('img');
  expect(imageElem).toHaveAttribute('src', '/test3.jpg');
});

test('renders title and subtitle correctly', () => {
  const titleElem = screen.getByRole('heading', {name: /test title/i});
  const subtitleElem = screen.getByText(/test subtitle/i);
  expect(titleElem).toBeInTheDocument();
  expect(subtitleElem).toBeInTheDocument();
});
