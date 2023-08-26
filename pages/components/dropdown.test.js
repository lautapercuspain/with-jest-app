```jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];
const handleChange = jest.fn();

test('renders the dropdown component correctly', () => {
  const { getByTestId, getByLabelText } = render(
    <Dropdown
      dataTestId="dropdown"
      options={options}
      value="option2"
      onChange={handleChange}
      label="Dropdown Label"
    />
  );

  expect(getByTestId('dropdown')).toBeInTheDocument();
  expect(getByLabelText('Dropdown Label')).toBeInTheDocument();
});

test('calls onChange handler when the value is changed', () => {
  const { getByTestId } = render(
    <Dropdown
      dataTestId="dropdown"
      options={options}
      value="option2"
      onChange={handleChange}
      label="Dropdown Label"
    />
  );

  fireEvent.change(getByTestId('dropdown'), { target: { value: 'option3' } });

  expect(handleChange).toHaveBeenCalledWith('option3');
});
```