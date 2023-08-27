import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('Input', () => {
  test('renders Input component', () => {
    const { getByDisplayValue } = render(<Input value="" onChange={() => {}} />);
    expect(getByDisplayValue('')).toBeInTheDocument();
  });

  test('onChange updates the value', () => {
    const mockOnChange = jest.fn();
    const { getByDisplayValue } = render(<Input value="" onChange={mockOnChange} />);

    const newValue = 'New Value';
    userEvent.type(getByDisplayValue(''), newValue);

    expect(mockOnChange).toHaveBeenCalledWith(newValue);
  });

  test('input value is updated when onChange is called', () => {
    const { getByDisplayValue } = render(<Input value="" onChange={() => {}} />);

    const newValue = 'New Value';
    fireEvent.change(getByDisplayValue(''), { target: { value: newValue } });

    expect(getByDisplayValue(newValue)).toBeInTheDocument();
  });
});