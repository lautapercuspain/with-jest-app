Test 1:
```jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

test('Dropdown component should render correctly', () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];
  const defaultValue = '2';
  const handleChange = jest.fn();

  const { getByLabelText, getByTestId } = render(
    <Dropdown
      dataTestId="dropdown-component"
      options={options}
      value={defaultValue}
      onChange={handleChange}
      label="Select an option:"
    />
  );

  const selectElement = getByLabelText('Select an option:');
  expect(selectElement.value).toBe(defaultValue);

  fireEvent.change(selectElement, { target: { value: '3' } });
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(handleChange).toHaveBeenCalledWith('3');

  const dropdownComponent = getByTestId('dropdown-component');
  expect(dropdownComponent).toBeInTheDocument();
});
```

Test 2:
```jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

test('Dropdown component should change value when an option is selected', () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];
  const defaultValue = '2';
  const handleChange = jest.fn();

  const { getByLabelText } = render(
    <Dropdown
      dataTestId="dropdown-component"
      options={options}
      value={defaultValue}
      onChange={handleChange}
      label="Select an option:"
    />
  );

  const selectElement = getByLabelText('Select an option:');
  expect(selectElement.value).toBe(defaultValue);

  fireEvent.change(selectElement, { target: { value: '3' } });
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(handleChange).toHaveBeenCalledWith('3');
});
```