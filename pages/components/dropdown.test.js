```jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

test('Dropdown should render correctly', () => {
  render(
    <Dropdown
      options={options}
      value={options[0].value}
      onChange={() => {}}
      label="Select an option"
    />
  );

  expect(screen.getByLabelText('Select an option')).toBeInTheDocument();
  expect(screen.getByText('Option 1')).toBeInTheDocument();
  expect(screen.getByText('Option 2')).toBeInTheDocument();
  expect(screen.getByText('Option 3')).toBeInTheDocument();
});

test('Dropdown should call onChange when an option is selected', () => {
  const mockOnChange = jest.fn();

  render(
    <Dropdown
      options={options}
      value={options[0].value}
      onChange={mockOnChange}
      label="Select an option"
    />
  );

  const dropdown = screen.getByLabelText('Select an option');
  fireEvent.change(dropdown, { target: { value: 'option2' } });

  expect(mockOnChange).toHaveBeenCalledWith('option2');
});
```