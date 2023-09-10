import React from 'react';
import { render, fireEvent , cleanup, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextInput from './TextInput';

afterEach(cleanup);

test('TextInput component should render properly with correct props value', async () => {
  const mockChangeHandler = jest.fn();

  render(<TextInput 
            id='text-input' 
            label='First Name' 
            type='text' 
            value='John' 
            placeholder='Enter your name' 
            onChange={mockChangeHandler} 
          />);

  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toHaveValue('John');
  
  const labelElement = screen.getByText('First Name');
  expect(labelElement).toBeTruthy();

  fireEvent.change(inputElement, { target: { value: 'David' }});
  
  await waitFor(() => expect(mockChangeHandler).toHaveBeenCalled());
});