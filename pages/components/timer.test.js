import React from 'react';
import { render, cleanup, fireEvent, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Timer from './Timer';

afterEach(cleanup);

it("renders correctly", () => {
  const { getByText } = render(<Timer />);
  expect(getByText('Timer: 0 seconds')).toBeInTheDocument();
});

it("increments time after 1 second", async () => {
  jest.useFakeTimers();
  const { getByText } = render(<Timer />);
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  await waitFor(() => {
    expect(getByText('Timer: 1 seconds')).toBeInTheDocument();
  });
  jest.useRealTimers();
});

it("clears interval on unmount", () => {
  const clearIntervalSpy = jest.spyOn(window, 'clearInterval');
  const { unmount } = render(<Timer />);
  unmount();
  expect(clearIntervalSpy).toHaveBeenCalledTimes(1);
});
