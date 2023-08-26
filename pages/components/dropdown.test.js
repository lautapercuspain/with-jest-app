Here are two unit tests for the Dropdown component using React and React Testing Library:

```jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

test('Dropdown renders correctly with options and default value', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  const defaultValue = 'option2';

  const { getByTestId, getByLabelText } = render(
    <Dropdown
      dataTestId="dropdown"
      options={options}
      value={defaultValue}
      onChange={() => {}}
      label="Select an option"
    />
  );

  const dropdownContainer = getByTestId('dropdown');
  const dropdownLabel = getByLabelText('Select an option');
  const dropdown = dropdownContainer.querySelector('select');

  expect(dropdownContainer).toBeInTheDocument();
  expect(dropdownLabel).toBeInTheDocument();
  expect(dropdown).toBeInTheDocument();
  expect(dropdown.value).toBe(defaultValue);
  expect(dropdown.options.length).toBe(options.length);

  options.forEach((option, index) => {
    expect(dropdown.options[index].value).toBe(option.value);
    expect(dropdown.options[index].label).toBe(option.label);
  });
});

test('Dropdown calls onChange callback when an option is selected', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  const defaultValue = 'option2';
  const onChangeMock = jest.fn();

  const { getByTestId } = render(
    <Dropdown
      dataTestId="dropdown"
      options={options}
      value={defaultValue}
      onChange={onChangeMock}
      label="Select an option"
    />
  );

  const dropdownContainer = getByTestId('dropdown');
  const dropdown = dropdownContainer.querySelector('select');

  expect(dropdown).toBeInTheDocument();

  fireEvent.change(dropdown, { target: { value: 'option3' } });

  expect(onChangeMock).toHaveBeenCalledTimes(1);
  expect(onChangeMock).toHaveBeenCalledWith('option3');
});
```