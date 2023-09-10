import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextInput from './TextInput';

afterEach(cleanup);

test('TextInput changes value when typing', () => {
  const onChangeMock = jest.fn();
  render(
    <TextInput 
      id='username' 
      label='Username' 
      type='text' 
      value='' 
      onChange={onChangeMock} 
      placeholder='Enter your username' 
    />
  );

  const input = screen.getByRole('textbox', {name: 'Username'});
  fireEvent.change(input, { target: { value: 'MyUsername' }});
  
  expect(onChangeMock).toHaveBeenCalled();
  expect(input.value).toBe('MyUsername');
});