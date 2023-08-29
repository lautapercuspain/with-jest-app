import React from 'react';
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import Checkbox from './Checkbox';

afterEach(cleanup);

test('should render label', () => {
  const { getByText } = render(<Checkbox label="Test Label" checked={false} onChange={jest.fn()} />);
  expect(getByText('Test Label')).toBeInTheDocument();
});

test('should trigger onChange when clicked', async () => {
  const mockFn = jest.fn();
  const { getByRole } = render(<Checkbox label="Test Label" checked={false} onChange={mockFn} />);
  const checkbox = getByRole('checkbox');
  fireEvent.click(checkbox);
  await waitFor(() => expect(mockFn).toHaveBeenCalledTimes(1));
});

test('should reflect checked state', () => {
  const { getByRole } = render(<Checkbox label="Test Label" checked={true} onChange={jest.fn()} />);
  const checkbox = getByRole('checkbox');
  expect(checkbox).toBeChecked();
});