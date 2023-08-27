import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'
import Input from './Input';

afterEach(cleanup);

describe('Input', () => {
  const setup = (props = {}) => {
    const utils = render(<Input {...props} />);
    const input = utils.getByRole('textbox');
    return {
      input,
      ...utils,
    };
  }

  test('It should keep a $ in front of the input', () => {
    const onChange = jest.fn();
    const { input } = setup({ value: 'Test value', onChange: onChange });
    fireEvent.change(input, { target: { value: 'New value' }});
    expect(input.value).toBe('New value');
    expect(onChange).toHaveBeenCalledWith('New value');
  });
});
