import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextInput from './TextInput';

afterEach(cleanup);

describe('TextInput', () => {
  test('renders correctly and respond to onChange event', async () => {
    const onChangeMock = jest.fn();
    const props = {
      id: 'testInput',
      type: 'text',
      label: 'Test label',
      value: '',
      onChange: onChangeMock,
      placeholder: 'Enter text'
    };
    const { getByLabelText, getByPlaceholderText } = render(<TextInput {...props} />);
    const input = getByLabelText(props.label);

    expect(input).toHaveValue('');
    expect(input).toBeInTheDocument();
    expect(getByPlaceholderText(props.placeholder)).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'new value' }});

    await waitFor(() => expect(onChangeMock).toHaveBeenCalledTimes(1));
    expect(input).toHaveValue('new value');
  });
});