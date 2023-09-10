import React from 'react';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextInput from './TextInput';

afterEach(cleanup);

test('TextInput component works as expected', async () => {
  const onChangeMock = jest.fn();
  const { getByLabelText } = render(
    <TextInput
      id="test-id"
      label="Test Label"
      type="text"
      value=""
      onChange={onChangeMock}
      placeholder="Test Placeholder"
    />
  );

  const input = getByLabelText('Test Label');
  fireEvent.change(input, { target: { value: 'testing' } });

  await waitFor(() => expect(onChangeMock).toHaveBeenCalledWith('testing'));
  expect(input).toHaveValue('testing');
});