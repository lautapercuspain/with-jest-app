import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import TextInput from './TextInput';

afterEach(cleanup);

test('check TextInput component', () => {
  const onChangeMock = jest.fn();
  const {getByLabelText} = render(
    <TextInput
      id="testId"
      label="Test Label"
      type="text"
      value=""
      onChange={onChangeMock}
      placeholder="Test Placeholder"
    />,
  );

  const input = getByLabelText(/Test Label/i, {exact: false});

  fireEvent.change(input, { target: { value: '123' }});

  expect(onChangeMock).toHaveBeenCalledTimes(1);
  expect(input).toHaveValue('123');
});