import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    const onChange = jest.fn();
    const { getByDisplayValue } = render(<Input value="test value" onChange={onChange} />);
    const input = getByDisplayValue("test value");
    expect(input).toBeInTheDocument();
  });

  it('handles change', () => {
    const onChange = jest.fn();
    const { getByDisplayValue } = render(<Input value="test value" onChange={onChange} />);
    const input = getByDisplayValue("test value");
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(onChange).toHaveBeenCalledWith('new value');
  });
});