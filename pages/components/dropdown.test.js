```jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  test('renders the label', () => {
    const label = 'Select an option';
    const { getByLabelText } = render(
      <Dropdown label={label} options={options} value="" onChange={() => {}} />
    );
    expect(getByLabelText(label)).toBeInTheDocument();
  });

  test('calls the onChange function when a new option is selected', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Dropdown
        dataTestId="dropdown"
        label="Select an option"
        options={options}
        value=""
        onChange={onChange}
      />
    );

    fireEvent.change(getByTestId('dropdown'), { target: { value: 'option2' } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('option2');
  });
});
```