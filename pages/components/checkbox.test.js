Here are the unit tests for the Checkbox component:


import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

test('renders checkbox with label', () => {
  const { getByLabelText } = render(<Checkbox checked={false} onChange={() => {}} label="Check me" />);
  const checkbox = getByLabelText('Check me');
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).not.toBeChecked();
});

test('calls onChange callback when checkbox is clicked', () => {
  const handleChange = jest.fn();
  const { getByLabelText } = render(<Checkbox checked={false} onChange={handleChange} label="Check me" />);
  const checkbox = getByLabelText('Check me');
  fireEvent.click(checkbox);
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(handleChange).toHaveBeenCalledWith(true);
});

test('renders checkbox as checked when checked prop is true', () => {
  const { getByLabelText } = render(<Checkbox checked={true} onChange={() => {}} label="Check me" />);
  const checkbox = getByLabelText('Check me');
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).toBeChecked();
});


Note: Make sure to install `@testing-library/react` and `@testing-library/jest-dom` packages before running these tests.