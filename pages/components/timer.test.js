import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Timer from './Timer';
import React from 'react';

test('Timer is rendered and show initial time', () => {
  render(<Timer />);

  const timerElement = screen.getByText(/Time left: 100/i, { exact: false });
  expect(timerElement).toBeInTheDocument();
});

test('Timer is rendered and count down when start is clicked', async () => {
  jest.useFakeTimers();

  render(<Timer />);

  const startButton = screen.getByRole('button', { name: /start/i });
  fireEvent.click(startButton);

  // Move ahead in time
  jest.advanceTimersByTime(1000);

  await waitFor(() => {
    const timerElement = screen.getByText(/Time left: 99/i, { exact: false });
    expect(timerElement).toBeInTheDocument();
  });

  jest.useRealTimers();
});

test('Timer is rendered and clears interval when stop is clicked', async () => {
  const clearIntervalMock = jest.spyOn(window, 'clearInterval');

  render(<Timer />);
  const startButton = screen.getByRole('button', { name: /start/i });
  fireEvent.click(startButton);

  const stopButton = screen.getByRole('button', { name: /stop/i });
  fireEvent.click(stopButton);

  expect(clearIntervalMock).toHaveBeenCalledTimes(1);
});
