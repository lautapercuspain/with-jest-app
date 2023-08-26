```jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

test('renders the dropdown component with options', () => {
  const handleChange = jest.fn();
  const label = 'Select an option';
  const value = '';

  render(
    <Dropdown
      dataTestId="dropdown"
      options={options}
      value={value}
      onChange={handleChange}
      label={label}
    />
  );

  const dropdown = screen.getByTestId('dropdown');
  const dropdownLabel = screen.getByText(label);

  expect(dropdown).toBeInTheDocument();
  expect(dropdownLabel).toBeInTheDocument();

  options.forEach((option) => {
    const optionElement = screen.getByText(option.label);
    expect(optionElement).toBeInTheDocument();
  });
});

test('triggers onChange event when selecting an option', () => {
  const handleChange = jest.fn();

  render(
    <Dropdown
      dataTestId="dropdown"
      options={options}
      value=""
      onChange={handleChange}
      label="Select an option"
    />
  );

  const dropdown = screen.getByTestId('dropdown');

  fireEvent.change(dropdown, { target: { value: options[1].value } });

  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(handleChange).toHaveBeenCalledWith(options[1].value);
});

```