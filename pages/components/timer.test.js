import React from 'react';
import { render, cleanup, waitFor, fireEvent, act } from '@testing-library/react';
import Timer from './Timer';

afterEach(cleanup);

test('should initialize Timer with correct initial state', () => {
  const { getByText } = render(<Timer />);
  expect(getByText('Timer: 0 seconds')).toBeInTheDocument();
});

test('should increment seconds every 1 second', async () => {
  jest.useFakeTimers();
  const { getByText } = render(<Timer />);

  act(() => {
    jest.advanceTimersByTime(1000);
  });

  await waitFor(() => expect(getByText('Timer: 1 seconds')).toBeInTheDocument());
  jest.useRealTimers();
});

test('should clear interval when component is unmounted', () => {
  const clearIntervalMock = jest.spyOn(window, 'clearInterval');
  const { unmount } = render(<Timer />);

  unmount();
  expect(clearIntervalMock).toHaveBeenCalledTimes(1);
});