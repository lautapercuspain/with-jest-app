import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Timer from './Timer';

jest.useFakeTimers();

test('should render Timer', () => {
  const { getByText } = render(<Timer />);
  const timerElement = getByText(/timer: 0 seconds/i);
  expect(timerElement).toBeInTheDocument();
});

test('should increment seconds every second', async () => {
  const { getByText } = render(<Timer />);
  await act(async () => {
    jest.advanceTimersByTime(1000);
  });
  const timerElement = getByText(/timer: 1 seconds/i);
  expect(timerElement).toBeInTheDocument();
});

test('should clear interval on unmount', () => {
  const clearIntervalMock = jest.spyOn(window, 'clearInterval');
  const { unmount } = render(<Timer />);
  unmount();
  expect(clearIntervalMock).toHaveBeenCalled();
});
