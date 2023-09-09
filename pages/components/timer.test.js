```jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Timer from "./Timer";

describe("Timer", () => {
  beforeEach(() => {
    jest.useFakeTimers(); // Mock timers
  });

  afterEach(() => {
    jest.runOnlyPendingTimers(); // Run any pending timers
    jest.useRealTimers(); // Restore real timers
  });

  test("renders timer with initial value", () => {
    render(<Timer />);
    const timerElement = screen.getByText(/Timer:/i);
    expect(timerElement).toBeInTheDocument();
    expect(timerElement).toHaveTextContent("Timer: 0 seconds");
  });

  test("starts timer when start button is clicked", () => {
    render(<Timer />);
    const startButton = screen.getByRole("button", { name: /start/i });
    fireEvent.click(startButton);

    jest.advanceTimersByTime(1000);
    const timerElement = screen.getByText(/Timer:/i);
    expect(timerElement).toHaveTextContent("Timer: 1 seconds");

    jest.advanceTimersByTime(2000);
    expect(timerElement).toHaveTextContent("Timer: 3 seconds");
  });

  test("pauses timer when pause button is clicked", () => {
    render(<Timer />);
    const startButton = screen.getByRole("button", { name: /start/i });
    const pauseButton = screen.getByRole("button", { name: /pause/i });

    fireEvent.click(startButton);
    jest.advanceTimersByTime(1000);
    fireEvent.click(pauseButton);

    jest.advanceTimersByTime(1000);
    const timerElement = screen.getByText(/Timer:/i);
    expect(timerElement).toHaveTextContent("Timer: 1 seconds");
  });

  test("resets timer when reset button is clicked", () => {
    render(<Timer />);
    const startButton = screen.getByRole("button", { name: /start/i });
    const resetButton = screen.getByRole("button", { name: /reset/i });

    fireEvent.click(startButton);
    jest.advanceTimersByTime(2000);
    fireEvent.click(resetButton);

    const timerElement = screen.getByText(/Timer:/i);
    expect(timerElement).toHaveTextContent("Timer: 0 seconds");
  });
});
```