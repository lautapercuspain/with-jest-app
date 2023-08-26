Here are two unit tests for the given code using React and React Testing Library:

```javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

test('Dropdown renders correctly with options', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  const value = 'option2';
  const label = 'Select an option';
  const onChange = jest.fn();

  const { getByTestId, getByLabelText } = render(
    <Dropdown
      dataTestId="dropdown"
      options={options}
      value={value}
      onChange={onChange}
      label={label}
    />
  );

  const dropdownContainer = getByTestId('dropdown');
  const selectElement = getByLabelText(label);

  expect(dropdownContainer).toBeInTheDocument();
  expect(selectElement).toBeInTheDocument();

  expect(selectElement.value).toBe(value);
  expect(selectElement.options.length).toBe(options.length);

  options.forEach((option) => {
    expect(selectElement).toContainHTML(`<option value="${option.value}">${option.label}</option>`);
  });
});

test('Dropdown calls onChange when a new option is selected', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  const value = 'option2';
  const label = 'Select an option';
  const onChange = jest.fn();

  const { getByLabelText } = render(
    <Dropdown
      dataTestId="dropdown"
      options={options}
      value={value}
      onChange={onChange}
      label={label}
    />
  );

  const selectElement = getByLabelText(label);

  fireEvent.change(selectElement, { target: { value: 'option3' } });

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith('option3');
});
```

Note: Make sure to install `@testing-library/react` and `@testing-library/jest-dom` dependencies to run the tests.