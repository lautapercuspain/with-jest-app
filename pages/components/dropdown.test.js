import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders dropdown with options', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];
  const { getByLabelText } = render(
    <Dropdown
      dataTestId="dropdown"
      options={options}
      value={options[0].value}
      onChange={() => {}}
      label="Test Dropdown"
    />,
  );
  const select = getByLabelText('Test Dropdown');
  expect(select.value).toBe('option1');
  expect(select.children.length).toBe(2);
});

test('triggers onChange with new value when selection changes', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];
  const onChange = jest.fn();
  const { getByLabelText } = render(
    <Dropdown
      dataTestId="dropdown"
      options={options}
      value={options[0].value}
      onChange={onChange}
      label="Test Dropdown"
    />,
  );
  const select = getByLabelText('Test Dropdown');
  fireEvent.change(select, { target: { value: 'option2' } });
  expect(onChange).toHaveBeenCalledWith('option2');
});