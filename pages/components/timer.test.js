import React from 'react';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react';
import Timer from './Timer';

afterEach(cleanup); 

test('Timer component should render correctly', () => {
  const { getByText } = render(<Timer />);
  expect(getByText(/Timer: 0 seconds/i)).toBeInTheDocument();
});

test('Timer component should increment seconds every second', async () => {
  jest.useFakeTimers();
  const { getByText } = render(<Timer />);

  await act(async () => {
    jest.advanceTimersByTime(1000);
  });

  expect(getByText(/Timer: 1 seconds/i)).toBeInTheDocument();
 });

test('Timer component should clear interval on unmount', () => {
  jest.useFakeTimers();
  const { unmount } = render(<Timer />);
  const clearIntervalSpy = jest.spyOn(global, 'clearInterval');

  unmount();
  expect(clearIntervalSpy).toHaveBeenCalledTimes(1);
});