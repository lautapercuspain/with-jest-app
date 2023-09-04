import React from "react";
import { render, cleanup, fireEvent, act } from "@testing-library/react";
import Timer from "./Timer";

jest.useFakeTimers();

afterEach(cleanup);

test('renders Timer properly', () => {
  const { getByText } = render(<Timer />);
  expect(getByText(/Timer: 0 seconds/i)).toBeInTheDocument();
});

test('increments timer every second', () => {
  const { getByText } = render(<Timer />);
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  expect(getByText(/Timer: 1 seconds/i)).toBeInTheDocument();
});

test('clears interval on unmount', () => {
  const { unmount } = render(<Timer />);
  unmount();
  
  expect(jest.getTimerCount()).toBe(0);
});