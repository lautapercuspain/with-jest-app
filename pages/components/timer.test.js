import React from 'react';
import { render, fireEvent, waitFor, cleanup, act} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Timer from './Timer';

afterEach(cleanup);

test('Initial render of Timer', () => {
  const { getByText } = render(<Timer />);
  expect(getByText('Timer: 0 seconds')).toBeInTheDocument();
});

test('Timer increments every second', async () => {
  jest.useFakeTimers();
  const { getByText } = render(<Timer />);
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  expect(getByText('Timer: 1 seconds')).toBeInTheDocument();
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  expect(getByText('Timer: 2 seconds')).toBeInTheDocument();
  jest.useRealTimers();
});

test('Timer cleared on unmount', () => {
  const { getByText, unmount } = render(<Timer />);
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  expect(getByText('Timer: 1 seconds')).toBeInTheDocument();
  unmount();
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  expect(() => getByText('Timer: 2 seconds')).toThrow();
});