```jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

test('Dropdown renders correctly with options', () => {
  const { getByText, getByTestId } = render(<Dropdown dataTestId="dropdown" options={options} />);
  const dropdownContainer = getByTestId('dropdown');
  const dropdownLabel = getByText('label text');
  const dropdownSelect = getByText('Option 1');

  expect(dropdownContainer).toBeInTheDocument();
  expect(dropdownLabel).toBeInTheDocument();
  expect(dropdownSelect).toBeInTheDocument();
});

test('Dropdown calls onChange function when an option is selected', () => {
  const onChange = jest.fn();
  const { getByTestId } = render(<Dropdown dataTestId="dropdown" options={options} onChange={onChange} />);
  const dropdownSelect = getByTestId('dropdown');
  
  fireEvent.change(dropdownSelect, { target: { value: '2' } });

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith('2');
});
```