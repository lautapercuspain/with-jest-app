import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from './Input';

afterEach(cleanup);

test('It should start with the expected initial value', () => {
  const { getByRole } = render(<Input value="initial value" onChange={() => {}} />);
  const input = getByRole('textbox');

  expect(input.value).toBe('initial value');
});

test('It should call the onChange method with the new value when changed', () => {
  const onChangeMock = jest.fn();
  const { getByRole } = render(<Input value="initial value" onChange={onChangeMock} />);
  const input = getByRole('textbox');

  fireEvent.change(input, { target: { value: 'new value' }});

  expect(onChangeMock).toHaveBeenCalledWith('new value');
});

test('It should update its value when changed', () => {
  const { getByRole } = render(<Input value="initial value" onChange={() => {}} />);
  const input = getByRole('textbox');

  fireEvent.change(input, { target: { value: 'new value' }});

  expect(input.value).toBe('new value');
});
