
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

afterEach(cleanup);

test('renders button with correct text', () => {
  const { getByText } = render(<Button text="Click me" />);
  const button = getByText('Click me');
  
  expect(button).toBeInTheDocument();
});

test('calls onClick handler when button is clicked', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button text="Click me" onClick={handleClick} />);
  const button = getByText('Click me');
  
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('renders button with custom class name', () => {
  const { getByText } = render(<Button text="Click me" className="custom-button" />);
  const button = getByText('Click me');
  
  expect(button).toHaveClass('custom-button');
});
