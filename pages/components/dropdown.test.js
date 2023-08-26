```jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

describe('Dropdown', () => {
  it('should render label and options correctly', () => {
    const { getByTestId, getByLabelText } = render(
      <Dropdown
        dataTestId="dropdown"
        options={options}
        value={options[0].value}
        onChange={() => {}}
        label="Select an option"
      />
    );
    
    const dropdownLabel = getByLabelText('Select an option');
    expect(dropdownLabel).toBeInTheDocument();

    const dropdownOptions = getByTestId('dropdown').querySelectorAll('option');
    expect(dropdownOptions.length).toBe(options.length);

    options.forEach((option, index) => {
      expect(dropdownOptions[index].value).toBe(option.value);
      expect(dropdownOptions[index].label).toBe(option.label);
    });
  });

  it('should call onChange with correct selected value', () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = render(
      <Dropdown
        dataTestId="dropdown"
        options={options}
        value={options[0].value}
        onChange={mockOnChange}
        label="Select an option"
      />
    );

    fireEvent.change(getByTestId('dropdown'), { target: { value: options[1].value } });
    expect(mockOnChange).toHaveBeenCalledWith(options[1].value);
  });
});
```