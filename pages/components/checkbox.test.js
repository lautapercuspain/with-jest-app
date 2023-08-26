import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

test('Checkbox renders correctly', () => {
  const { getByLabelText } = render(<Checkbox checked={false} onChange={() => {}} label="Test Checkbox" />);
  const checkbox = getByLabelText('Test Checkbox');

  expect(checkbox).toBeInTheDocument();
  expect(checkbox).not.toBeChecked();
});

test('Checkbox can be checked', () => {
  const onChange = jest.fn();
  const { getByLabelText } = render(<Checkbox checked={false} onChange={onChange} label="Test Checkbox" />);
  const checkbox = getByLabelText('Test Checkbox');

  fireEvent.click(checkbox);

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(checkbox).toBeChecked();
});

test('Checkbox can be unchecked', () => {
  const onChange = jest.fn();
  const { getByLabelText } = render(<Checkbox checked={true} onChange={onChange} label="Test Checkbox" />);
  const checkbox = getByLabelText('Test Checkbox');

  fireEvent.click(checkbox);

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(checkbox).not.toBeChecked();
});