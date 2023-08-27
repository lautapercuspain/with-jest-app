import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('Input component', () => {
  it('renders with initial value', () => {
    const { getByDisplayValue } = render(<Input value="initial value" onChange={jest.fn()} />);
    expect(getByDisplayValue('initial value')).toBeInTheDocument();
  });

  it('calls onChange handler when value is changed', async () => {
    const mockOnChange = jest.fn();
    const { getByRole } = render(<Input value="initial value" onChange={mockOnChange} />);
    const input = getByRole('textbox');

    fireEvent.change(input, { target: { value: 'new value' }});

    await waitFor(() => expect(mockOnChange).toHaveBeenCalledWith('new value'));
  });

  it('updates its value when onChange is called', async () => {
    const { getByRole } = render(<Input value="initial value" onChange={jest.fn()} />);
    const input = getByRole('textbox');

    userEvent.type(input, 'new value');

    await waitFor(() => expect(input).toHaveValue('new value'));
  });
});