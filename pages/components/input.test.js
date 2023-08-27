import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './Input';

describe('Input', () => {
  afterEach(cleanup);

  test('renders the input with the initial value', () => {
    const { getByDisplayValue } = render(<Input value="initial value" onChange={() => {}} />);
    const inputElement = getByDisplayValue('initial value');
    expect(inputElement).toBeInTheDocument();
  });

  test('updates the value when typing', () => {
    const handleChange = jest.fn();
    const { getByDisplayValue } = render(<Input value="" onChange={handleChange} />);
    const inputElement = getByDisplayValue('');

    fireEvent.change(inputElement, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledWith('new value');
  });

  test('updates the state value when typing', async () => {
    const { getByDisplayValue, getByRole } = render(<Input value="" onChange={() => {}} />);
    const inputElement = getByDisplayValue('');

    fireEvent.change(inputElement, { target: { value: 'new value' } });
    
    await waitFor(() => {
      const updatedInputElement = getByRole('textbox');
      expect(updatedInputElement.value).toBe('new value');
    });
  });
});