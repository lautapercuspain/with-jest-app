import React from 'react';
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import Timer from './Timer';

let clearIntervalMock;

beforeEach(() => {
  clearIntervalMock = jest.spyOn(window, 'clearInterval');
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
  cleanup();
});

test('It should render Timer', () => {
  render(<Timer />);
  const timerText = screen.getByText(/Timer: 0 seconds/i);
  expect(timerText).toBeInTheDocument();
});

test('It should increment seconds after 1000ms', async () => {
  render(<Timer />);
  jest.advanceTimersByTime(1000);
  await waitFor(() => {
    const timerText = screen.getByText(/Timer: 1 seconds/i);
    expect(timerText).toBeInTheDocument();
  });
});

test('It should clear interval on unmount', () => {
  const { unmount } = render(<Timer />);
  unmount();
  expect(clearIntervalMock).toHaveBeenCalled();
});