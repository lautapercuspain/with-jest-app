import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import TextInput from './TextInput';

// mock function for onChange
const onChange = jest.fn();

// Props
const props = {
  id: 'test-input',
  label: 'Test Input',
  type: 'text',
  value: '',
  onChange: onChange,
  placeholder: 'Enter text',
};

describe('TextInput component', () => {
  afterEach(cleanup);

  test('renders TextInput component with props', () => {
    const { getByLabelText, getByRole } = render(<TextInput {...props} />);

    expect(getByLabelText(/Test Input/i)).toBeInTheDocument();
    expect(getByRole('textbox')).toBeInTheDocument();
  });

  test('onChange updates the value', () => {
    const { getByRole } = render(<TextInput {...props} />);
    const input = getByRole('textbox');

    fireEvent.change(input, { target: { value: 'New Value' } });

    expect(onChange).toHaveBeenCalled();
  });
});