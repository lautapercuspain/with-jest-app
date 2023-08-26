import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

test('renders Input and checks if it responds to user interaction', () => {
  const value = 'Test value';
  const onChange = jest.fn();
  const { getByDisplayValue } = render(<Input value={value} onChange={onChange} />);

  const input = getByDisplayValue(value);
  fireEvent.change(input, { target: { value: 'New value' } });

  expect(onChange).toBeCalledWith('New value');
});

test('renders Input and checks if it initializes with the correct value', () => {
  const value = 'Test value';
  const onChange = jest.fn();
  const { getByDisplayValue } = render(<Input value={value} onChange={onChange} />);

  const input = getByDisplayValue(value);
  expect(input.value).toBe(value);
});