
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

test('renders dropdown component', () => {
  const { getByTestId } = render(<Dropdown dataTestId="dropdown" options={options} value="option1" onChange={() => {}} label="Dropdown Label" />);
  const dropdownElement = getByTestId('dropdown');
  expect(dropdownElement).toBeInTheDocument();
});

test('renders correct label', () => {
  const { getByLabelText } = render(<Dropdown dataTestId="dropdown" options={options} value="option1" onChange={() => {}} label="Dropdown Label" />);
  const labelElement = getByLabelText('Dropdown Label');
  expect(labelElement).toBeInTheDocument();
});

test('renders correct options', () => {
  const { getByRole } = render(<Dropdown dataTestId="dropdown" options={options} value="option1" onChange={() => {}} label="Dropdown Label" />);
  const selectElement = getByRole('combobox');
  options.forEach((option) => {
    const optionElement = getByRole('option', { name: option.label });
    expect(optionElement).toBeInTheDocument();
    expect(optionElement.value).toBe(option.value);
  });
});

test('calls onChange when option is selected', () => {
  const handleChange = jest.fn();
  const { getByRole } = render(<Dropdown dataTestId="dropdown" options={options} value="option1" onChange={handleChange} label="Dropdown Label" />);
  const selectElement = getByRole('combobox');
  fireEvent.change(selectElement, { target: { value: 'option2' } });
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(handleChange).toHaveBeenCalledWith('option2');
});
```