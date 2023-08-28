import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

afterEach(cleanup);

test('renders button with provided text', () => {
  const { getByRole } = render(<Button onClick={() => {}} text="Click Me"/>);
  const button = getByRole('button', { name: /Click Me/i });
  expect(button).toBeInTheDocument();
});

test('onClick is called when button is clicked', () => {
  const handleClick = jest.fn();
  const { getByRole } = render(<Button onClick={handleClick} text="Click Me"/>);
  const button = getByRole('button', { name: /Click Me/i });

  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});

test('button text changes when prop changes', async () => {
  const { getByRole, rerender } = render(<Button onClick={() => {}} text="Click Me"/>);
  let button = getByRole('button', { name: /Click Me/i });

  rerender(<Button onClick={() => {}} text="New Text"/>);
  button = getByRole('button', { name: /New Text/i });
  expect(button).toBeInTheDocument();
});