import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  const dataTestId = 'dropdown-component';
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];
  const label = 'Test Dropdown';
  const onChange = jest.fn();
  let component;

  beforeEach(() => {
    component = render(
      <Dropdown
        dataTestId={dataTestId}
        options={options}
        value={options[0].value}
        onChange={onChange}
        label={label}
      />
    );
  });

  afterEach(cleanup);

  it('renders the component correctly', () => {
    const { getByTestId } = component;
    const dropdown = getByTestId(dataTestId);

    expect(dropdown).toBeInTheDocument();
  });

  it('renders the correct number of options', () => {
    const { getAllByRole } = component;
    const dropdownOptions = getAllByRole('option');

    expect(dropdownOptions).toHaveLength(options.length);
  });

  it('handles onChange event correctly', () => {
    const { getByRole } = component;
    const selectElement = getByRole('combobox');

    fireEvent.change(selectElement, { target: { value: options[1].value } });

    expect(onChange).toHaveBeenCalledWith(options[1].value);
  });
});