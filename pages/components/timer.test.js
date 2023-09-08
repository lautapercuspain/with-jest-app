import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Timer from './Timer';

jest.useFakeTimers();

test('renders Timer and starts with 0 seconds', () => {
  render(<Timer />);
  const timerText = screen.getByText(/Timer: 0/);
  expect(timerText).toBeInTheDocument();
});

test('increments timer every second', async () => {
  render(<Timer />);

  await waitFor(() => {
    jest.advanceTimersByTime(1000);
    const timerText = screen.getByText(/Timer: 1/);
    expect(timerText).toBeInTheDocument();
  });
});

test('clears interval when Timer components unmount', () => {
  const clearIntervalMock = jest.spyOn(window, 'clearInterval');
  const { unmount } = render(<Timer />);
  unmount();
  expect(clearIntervalMock).toHaveBeenCalled();
});