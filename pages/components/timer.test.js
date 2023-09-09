import React from 'react';
import { render, cleanup, fireEvent, waitFor, screen, act } from '@testing-library/react';
import Timer from './Timer';

afterEach(cleanup);

jest.useFakeTimers();

test("Timer component increases the count every second", async () => {
  render(<Timer />);
  const timerNode = screen.getByText('Timer: 0 seconds');

  act(() => {
    jest.advanceTimersByTime(1000);
  });

  expect(timerNode).toHaveTextContent('Timer: 1 seconds');

  act(() => {
    jest.advanceTimersByTime(1000);
  });

  expect(timerNode).toHaveTextContent('Timer: 2 seconds');
});

test("Timer component stops increasing the count after unmount", async () => {
  const { unmount } = render(<Timer />);
  const timerNode = screen.getByText('Timer: 0 seconds');

  act(() => {
    jest.advanceTimersByTime(1000);
  });

  unmount();

  act(() => {
    jest.advanceTimersByTime(1000);
  });

  expect(timerNode).toHaveTextContent('Timer: 1 seconds');
});