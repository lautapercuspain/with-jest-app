import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('Input', () => {
  const mockOnChange = jest.fn();
  const mockValue = 'Test Value';

  it('renders correctly', () => {
    const { getByDisplayValue } = render(<Input value={mockValue} onChange={mockOnChange} />);
    expect(getByDisplayValue(mockValue)).toBeInTheDocument();
  });

  it('calls onChange on input change', () => {
    const { getByDisplayValue } = render(<Input value={mockValue} onChange={mockOnChange} />);
    const input = getByDisplayValue(mockValue);
    userEvent.type(input, 'New Value');
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('updates value on input change', () => {
    const { getByDisplayValue } = render(<Input value={mockValue} onChange={mockOnChange} />);
    const input = getByDisplayValue(mockValue);
    userEvent.type(input, 'New Value');
    expect(input.value).toBe('New Value');
  });
});