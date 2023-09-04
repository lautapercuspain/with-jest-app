import React from 'react';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import Timer from './Timer';

jest.useFakeTimers();

afterEach(cleanup);

test('it should initialize with Timer: 0 seconds', async () => {
  const { getByRole } = render(<Timer />);
  expect(getByRole('timer')).toHaveTextContent('Timer: 0 seconds');
});

test('check if timer increments every second', () => {
  const { getByRole } = render(<Timer />);
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  expect(getByRole('timer')).toHaveTextContent('Timer: 1 seconds');
});

test('check if timer increments correctly after 5 seconds', () => {
  const { getByRole } = render(<Timer />);
  act(() => {
    jest.advanceTimersByTime(5000);
  });
  expect(getByRole('timer')).toHaveTextContent('Timer: 5 seconds');
});