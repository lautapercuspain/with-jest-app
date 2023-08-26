```jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

test('renders the dropdown component correctly', () => {
  const onChange = jest.fn();
  const { getByTestId, getByLabelText } = render(
    <Dropdown
      dataTestId="dropdown"
      options={options}
      value="option1"
      onChange={onChange}
      label="Select an option"
    />
  );

  const dropdownContainer = getByTestId('dropdown');
  const dropdownLabel = getByLabelText('Select an option');
  const dropdownElement = getByTestId('dropdown');
  const dropdownOptions = dropdownElement.getElementsByTagName('option');

  expect(dropdownContainer).toBeInTheDocument();
  expect(dropdownLabel).toBeInTheDocument();
  expect(dropdownElement).toBeInTheDocument();
  expect(dropdownOptions.length).toBe(3);
});

test('calls onChange function when a new option is selected', () => {
  const onChange = jest.fn();
  const { getByTestId } = render(
    <Dropdown
      dataTestId="dropdown"
      options={options}
      value="option1"
      onChange={onChange}
      label="Select an option"
    />
  );

  const dropdownElement = getByTestId('dropdown');
  fireEvent.change(dropdownElement, { target: { value: 'option2' } });

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith('option2');
});
```