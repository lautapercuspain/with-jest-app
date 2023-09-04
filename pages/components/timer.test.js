import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { fireEvent } from '@testing-library/user-event';
import Timer from './Timer';

jest.useFakeTimers();

test('Timer should initially display "Timer: 0 seconds"', () => {
  render(<Timer />);
  const timerText = screen.getByText(/Timer: 0 seconds/i);
  expect(timerText).toBeInTheDocument();
});

test('Timer should increment every second', async () => {
  render(<Timer />);
  const timerText = screen.getByText(/Timer: 0 seconds/i);
  jest.advanceTimersByTime(1000);
  await waitFor(() => expect(timerText.textContent).toBe('Timer: 1 seconds'));
});

test('Timer should clear interval when unmounted', async () => {
  const clearIntervalMock = jest.spyOn(window, 'clearInterval');
  const { unmount } = render(<Timer />);
  unmount();
  expect(clearIntervalMock).toHaveBeenCalled();
});