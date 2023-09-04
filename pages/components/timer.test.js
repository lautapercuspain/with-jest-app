import React from 'react';
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import Timer from './Timer';

afterEach(cleanup);

test('renders Timer component', () => {
  render(<Timer />);
  const timerElement = screen.getByText(/Timer: 0 seconds/i, {exact: false});
  expect(timerElement).toBeInTheDocument();
});

test('timer increments by 1 after 1 second', async () => {
  jest.useFakeTimers();
  render(<Timer />);
  jest.advanceTimersByTime(1000);

  const timerElement = await waitFor(() => screen.getByText(/Timer: 1 seconds/i, {exact: false}));
  expect(timerElement).toBeInTheDocument();

  jest.useRealTimers();
});

test('timer clears interval on unmount', () => {
  const clearIntervalMock = jest.spyOn(window, 'clearInterval');
  
  const { unmount } = render(<Timer />);
  unmount();

  expect(clearIntervalMock).toHaveBeenCalledTimes(1);
});