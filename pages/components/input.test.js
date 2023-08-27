import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Input from './Input';

describe('Input component', () => {
  afterEach(cleanup);

  it('renders with initial value', () => {
    const { getByDisplayValue } = render(<Input value="Initial value" onChange={jest.fn()} />);
    const inputElement = getByDisplayValue('Initial value');
    expect(inputElement).toBeInTheDocument();
  });

  it('calls onChange with new value after change event', () => {
    const onChange = jest.fn();
    const { getByDisplayValue } = render(<Input value="Initial value" onChange={onChange} />);
    const inputElement = getByDisplayValue('Initial value');
    fireEvent.change(inputElement, { target: { value: 'New Value' }});
    expect(onChange).toHaveBeenCalledWith('New Value');
  });

  it('updates value after change event', async () => {
    const { getByDisplayValue } = render(<Input value="Initial value" onChange={jest.fn()} />);
    const inputElement = getByDisplayValue('Initial value');
    fireEvent.change(inputElement, { target: { value: 'New Value' }});
    const updatedInputElement = getByDisplayValue('New Value');
    expect(updatedInputElement).toBeInTheDocument();
  });
});
