import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

describe('Button', () => {
  let onClick;

  beforeEach(() => {
    onClick = jest.fn();
  });

  afterEach(cleanup);

  test('renders correctly', () => {
    const { getByRole } = render(<Button onClick={onClick} text="Test Button" />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('handles click', () => {
    const { getByRole } = render(<Button onClick={onClick} text="Test Button" />);
    const button = getByRole('button');

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('displays correct text', () => {
    const { getByRole } = render(<Button onClick={onClick} text="Test Button" />);
    const button = getByRole('button');
    expect(button).toHaveTextContent('Test Button');
  });
});