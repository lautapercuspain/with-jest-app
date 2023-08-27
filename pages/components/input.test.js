import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from './Input';

afterEach(cleanup);

test('Input renders with initial value', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<Input value="Initial value" onChange={onChange} />);
    expect(getByRole('textbox')).toHaveValue('Initial value');
});

test('Input value updates when changed', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<Input value="Initial value" onChange={onChange} />);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'New value' } });
    expect(input).toHaveValue('New value');
});

test('onChange callback is called with new value', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<Input value="Initial value" onChange={onChange} />);
    const newValue = 'New value';
    fireEvent.change(getByRole('textbox'), { target: { value: newValue } });
    expect(onChange).toHaveBeenCalledWith(newValue);
});