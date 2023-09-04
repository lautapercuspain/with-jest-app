import React from 'react';
import { render, fireEvent, cleanup, waitFor, screen } from '@testing-library/react';
import Timer from './Timer';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

jest.useFakeTimers();

test('timer initializes with 0 seconds', () => {
  render(<Timer />);
  const secondsNode = screen.getByText('Timer: 0 seconds');
  expect(secondsNode).toBeInTheDocument();
});

test('timer increments every second', async () => {
  render(<Timer />);
  const secondsNode = screen.getByText(/Timer: \d+ seconds/);

  await waitFor(() => {
    jest.advanceTimersByTime(1000);
    expect(secondsNode.textContent).toBe('Timer: 1 seconds');
  });

  await waitFor(() => {
    jest.advanceTimersByTime(1000);
    expect(secondsNode.textContent).toBe('Timer: 2 seconds');
  });
});

test('timer resets on unmount', () => {
  const { unmount } = render(<Timer />);
  const clearIntervalMock = jest.spyOn(window, 'clearInterval');

  unmount();

  expect(clearIntervalMock).toHaveBeenCalled();
});
