import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import TextInput from './TextInput';

afterEach(cleanup);

it('renders and updates a text input', async () => {
  const mockOnChange = jest.fn();
  const { getByRole } = render(<TextInput 
    id='testInput'
    label='Test Input'
    type='text'
    value='Initial Value'
    onChange={mockOnChange}
    placeholder=' Input placeholder'
  />);

  const inputField = getByRole('textbox');
  
  expect(inputField.value).toBe('Initial Value');

  fireEvent.change(inputField, { target: { value: 'New Value' }});

  expect(mockOnChange).toHaveBeenCalled();
  expect(inputField.value).toBe('Initial Value'); // value wouldn't have been changed in the input as that change should have been lifted up to the parent to manage.
});
