import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

afterEach(cleanup);

test('renders the button with the provided text', () => {
  const { getByRole } = render(<Button text="Submit" onClick={jest.fn()}/>);
  const button = getByRole('button');
  expect(button).toHaveTextContent('Submit');
});

test('calls onClick prop when clicked', () => {
  const handleClick = jest.fn();
  const { getByRole } = render(<Button text="Submit" onClick={handleClick}/>);
  
  fireEvent.click(getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('does not call onClick prop when clicked multiple times', () => {
  const handleClick = jest.fn();
  const { getByRole } = render(<Button text="Submit" onClick={handleClick}/>);
  
  fireEvent.click(getByRole('button'));
  fireEvent.click(getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(2);
});
