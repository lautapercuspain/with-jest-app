import React from 'react';
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import TextInput from './TextInput';
import '@testing-library/jest-dom/extend-expect';

describe('TextInput', () => {
  afterEach(() => {
      cleanup();
  });

  test('TextInput renders correctly', async () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(<TextInput type="text" id="test-input" label="Test Input" value="" onChange={onChangeMock} placeholder="Enter text" />);
    const input = getByLabelText('Test Input');

    expect(input).toHaveAttribute('placeholder', 'Enter text');

    fireEvent.change(input, { target: { value: 'Hello' } });

    await waitFor(() => {
      expect(onChangeMock).toHaveBeenCalled();
      expect(input.value).toBe('Hello');
    });
  });
});