import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Dropdown from './Dropdown';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
];

const onChangeMock = jest.fn();

test('renders dropdown with options', () => {
  const { getByTestId, getByLabelText } = render(
    <Dropdown
      dataTestId="dropdown"
      options={options}
      value="option1"
      onChange={onChangeMock}
      label="Dropdown"
    />
  );

  const dropdown = getByTestId('dropdown');
  const select = getByLabelText('Dropdown');

  expect(dropdown).toBeInTheDocument();
  expect(select.value).toBe('option1');
  expect(select).toHaveAttribute('id', 'dropdown');
  expect(select).toHaveAttribute('value', 'option1');
  expect(select).toHaveAttribute('onChange');
  expect(select).toHaveAttribute('onchange', expect.any(Function));
});

test('calls onChange callback when selecting a different option', () => {
  const { getByLabelText } = render(
    <Dropdown
      dataTestId="dropdown"
      options={options}
      value="option1"
      onChange={onChangeMock}
      label="Dropdown"
    />
  );

  const select = getByLabelText('Dropdown');

  fireEvent.change(select, { target: { value: 'option2' } });

  expect(onChangeMock).toHaveBeenCalledWith('option2');
});