import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];
const initialValue = 'option1';

test('Dropdown renders correctly', () => {
  render(<Dropdown options={options} value={initialValue} onChange={jest.fn()} label="Select an Option" />);
  
  expect(screen.getByLabelText('Select an Option')).toBeInTheDocument();
  expect(screen.getByDisplayValue('option1')).toBeInTheDocument();
  expect(screen.getByRole('option', { name: 'Option 1' })).toBeInTheDocument();
  expect(screen.getByRole('option', { name: 'Option 2' })).toBeInTheDocument();
  expect(screen.getByRole('option', { name: 'Option 3' })).toBeInTheDocument();
});

test('Dropdown calls onChange with selected value', () => {
  const onChange = jest.fn();
  render(<Dropdown options={options} value={initialValue} onChange={onChange} label="Select an Option" />);
  
  const selectElement = screen.getByLabelText('Select an Option');
  fireEvent.change(selectElement, { target: { value: 'option2' } });
  
  expect(onChange).toHaveBeenCalledWith('option2');
});