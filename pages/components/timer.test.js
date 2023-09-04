import React from 'react';
import { render, cleanup, fireEvent, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Timer from './Timer';

afterEach(cleanup);

test('renders Timer component correctly', () => {
  const { getByText } = render(<Timer />);
  expect(getByText(/Timer:/i)).toBeInTheDocument();
});

test("timer increments every second", async () => {
  jest.useFakeTimers();
  const { getByText } = render(<Timer />);

  act(() => {
    jest.advanceTimersByTime(1000);
  });

  await waitFor(() => {
    expect(getByText('Timer: 1 seconds')).toBeInTheDocument();
  });
});

test("timer clears interval on unmount", () => {
  jest.useFakeTimers();
  const { getByText, unmount } = render(<Timer />);

  act(() => {
    jest.advanceTimersByTime(1000);
  });

  unmount();

  act(() => {
    jest.advanceTimersByTime(1000);
  });

  expect(setInterval).toHaveBeenCalledTimes(1);
  expect(clearInterval).toHaveBeenCalledTimes(1);
});