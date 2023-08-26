import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

test('renders Input and checks if onChange works', () => {
  const onChange = jest.fn();
  const { getByDisplayValue } = render(<Input value="test" onChange={onChange} />);

  const input = getByDisplayValue('test');
  fireEvent.change(input, { target: { value: 'new value' } });

  expect(onChange).toHaveBeenCalledWith('new value');
});

test('renders Input and checks if the initial value is correct', () => {
  const onChange = jest.fn();
  const { getByDisplayValue } = render(<Input value="test" onChange={onChange} />);

  const input = getByDisplayValue('test');
  expect(input.value).toBe('test');
});