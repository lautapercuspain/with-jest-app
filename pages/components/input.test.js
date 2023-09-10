import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextInput from './TextInput';

afterEach(cleanup);

test('TextInput component should render correctly and handle text change', async () => {
  const mockOnChange = jest.fn();
  const { getByLabelText } = render(
    <TextInput
      type="text"
      id="test-id"
      value=""
      label="Test Label"
      placeholder="Test Placeholder"
      onChange={mockOnChange}
    />
  );

  const input = getByLabelText('Test Label') as HTMLInputElement;
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute('placeholder', 'Test Placeholder');

  fireEvent.change(input, { target: { value: 'new value' } });
  expect(mockOnChange).toHaveBeenCalled();
});