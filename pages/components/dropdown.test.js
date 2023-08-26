import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

test('renders the dropdown component', () => {
  render(
    <Dropdown
      dataTestId="dropdown"
      options={options}
      value="option1"
      onChange={() => {}}
      label="Select an option"
    />
  );

  const dropdownElement = screen.getByTestId('dropdown');
  expect(dropdownElement).toBeInTheDocument();
});

test('renders the dropdown options', () => {
  render(
    <Dropdown
      dataTestId="dropdown"
      options={options}
      value="option1"
      onChange={() => {}}
      label="Select an option"
    />
  );

  const option1 = screen.getByText('Option 1');
  const option2 = screen.getByText('Option 2');
  const option3 = screen.getByText('Option 3');

  expect(option1).toBeInTheDocument();
  expect(option2).toBeInTheDocument();
  expect(option3).toBeInTheDocument();
});

test('calls onChange function when an option is selected', () => {
  const mockOnChange = jest.fn();

  render(
    <Dropdown
      dataTestId="dropdown"
      options={options}
      value="option1"
      onChange={mockOnChange}
      label="Select an option"
    />
  );

  const dropdownElement = screen.getByTestId('dropdown');
  fireEvent.change(dropdownElement, { target: { value: 'option2' } });

  expect(mockOnChange).toHaveBeenCalledTimes(1);
  expect(mockOnChange).toHaveBeenCalledWith('option2');
});