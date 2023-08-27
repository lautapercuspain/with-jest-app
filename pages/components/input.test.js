import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Input from './Input';

afterEach(cleanup);

test('renders correctly', () => {
  const onChange = jest.fn();
  const { getByRole } = render(<Input value="test" onChange={onChange} />);
  const input = getByRole('textbox');

  expect(input.value).toBe('test');
});

test('handles change correctly', () => {
  const onChange = jest.fn();
  const { getByRole } = render(<Input value="" onChange={onChange} />);
  const input = getByRole('textbox');

  fireEvent.change(input, { target: { value: 'new test' }});

  expect(input.value).toBe('new test');
  expect(onChange).toHaveBeenCalledWith('new test');
});

test('changes value correctly when props change', () => {
  const onChange = jest.fn();
  const { getByRole, rerender } = render(<Input value="test" onChange={onChange} />);
  const input = getByRole('textbox');

  rerender(<Input value="new test" onChange={onChange} />);

  expect(input.value).toBe('new test');
});