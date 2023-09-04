import React from 'react';
import { render, cleanup, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Timer from './Timer';

jest.useFakeTimers();

afterEach(cleanup);

test('renders correctly', () => {
  const { getByText } = render(<Timer />);
  const timerElement = getByText(/Timer: 0 seconds/i);
  expect(timerElement).toBeInTheDocument();
});

test('updates every second', async () => {
  const { getByText } = render(<Timer />);

  jest.advanceTimersByTime(1000);
  let timerElement = getByText(/Timer: 1 seconds/i);
  expect(timerElement).toBeInTheDocument();

  jest.advanceTimersByTime(1000);
  timerElement = getByText(/Timer: 2 seconds/i);
  expect(timerElement).toBeInTheDocument();
});

test('clears interval on unmount', () => {
  const clearIntervalMock = jest.spyOn(window, 'clearInterval');
  const { unmount } = render(<Timer />);
  
  unmount();

  expect(clearIntervalMock).toHaveBeenCalled();
});
