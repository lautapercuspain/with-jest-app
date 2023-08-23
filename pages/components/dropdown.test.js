import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  test('renders dropdown with options', () => {
    const { getByLabelText, getByText } = render(
      <Dropdown options={options} value="option2" onChange={jest.fn()} label="Select an option" />
    );

    const dropdownLabel = getByLabelText(/Select an option/i);
    expect(dropdownLabel).toBeInTheDocument();

    const option1 = getByText(/Option 1/i);
    expect(option1).toBeInTheDocument();

    const option2 = getByText(/Option 2/i);
    expect(option2).toBeInTheDocument();

    const option3 = getByText(/Option 3/i);
    expect(option3).toBeInTheDocument();
  });

  test('calls onChange when selecting an option', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(<Dropdown options={options} value="" onChange={handleChange} label="Select an option" />);

    const dropdown = getByLabelText(/Select an option/i);

    fireEvent.change(dropdown, { target: { value: 'option1' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('option1');
  });
});