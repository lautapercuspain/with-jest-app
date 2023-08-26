import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

test('renders checkbox with label', () => {
  const { getByLabelText } = render(<Checkbox checked={false} onChange={() => {}} label="Test Checkbox" />);
  const checkbox = getByLabelText('Test Checkbox');
  expect(checkbox).toBeInTheDocument();
});

test('checkbox should be checked when checked prop is true', () => {
  const { getByLabelText } = render(<Checkbox checked={true} onChange={() => {}} label="Test Checkbox" />);
  const checkbox = getByLabelText('Test Checkbox');
  expect(checkbox.checked).toBe(true);
});

test('onChange event should be called when checkbox is clicked', () => {
  const handleChange = jest.fn();
  const { getByLabelText } = render(<Checkbox checked={false} onChange={handleChange} label="Test Checkbox" />);
  const checkbox = getByLabelText('Test Checkbox');
  fireEvent.click(checkbox);
  expect(handleChange).toHaveBeenCalledTimes(1);
});