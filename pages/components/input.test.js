```jsx
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextInput from './TextInput';

afterEach(cleanup);

test('renders TextInput', () => {
  const {getByLabelText} = render(<TextInput id="testId" label="Test Label" type="text" value="" onChange={() => {}} placeholder="Test Placeholder"/>);
  const inputNode = getByLabelText('Test Label');
  expect(inputNode).toBeInTheDocument();
});

test('changes TextInput value on change event', () => {
  const onChangeMock = jest.fn();
  const {getByLabelText} = render(<TextInput id="testId" label="Test Label" type="text" value="" onChange={onChangeMock} placeholder="Test Placeholder"/>);
  const newValue = "New Value";
  const inputNode = getByLabelText('Test Label');
  fireEvent.change(inputNode, { target: { value: newValue } });
  expect(onChangeMock).toHaveBeenCalledTimes(1);
});
```