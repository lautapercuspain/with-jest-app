import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Checkbox from './Checkbox';

afterEach(cleanup);

test('renders the Checkbox component', () => {
  const { getByRole } = render(<Checkbox checked={false} onChange={() => {}} label="Custom Checkbox" />);
  const checkbox = getByRole('checkbox');
  expect(checkbox).toBeInTheDocument();
});

test('check the checkbox', () => {
  const mockOnChange = jest.fn();
  const { getByRole } = render(<Checkbox checked={false} onChange={mockOnChange} label="Custom Checkbox" />);
  const checkbox = getByRole('checkbox');
  fireEvent.click(checkbox);
  expect(mockOnChange).toHaveBeenCalled();
});

test('uncheck the checkbox', () => {
  const mockOnChange = jest.fn();
  const { getByRole } = render(<Checkbox checked={true} onChange={mockOnChange} label="Custom Checkbox" />);
  const checkbox = getByRole('checkbox');
  expect(checkbox).toBeChecked();
  fireEvent.click(checkbox);
  expect(mockOnChange).toHaveBeenCalled();
});