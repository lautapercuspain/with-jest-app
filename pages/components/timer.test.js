import React from 'react';
import { act, render, screen, cleanup } from '@testing-library/react';
import Timer from './Timer';

jest.useFakeTimers();

describe("Timer component", () => {

  afterEach(() => {
    jest.clearAllTimers();
    cleanup();
  });

  test("it should render the Timer component", () => {
    render(<Timer />);
    const timer = screen.getByText(/timer: 0 seconds/i, {exact: false});
    expect(timer).toBeInTheDocument();
  });

  test("it should increment the seconds after 1 second", () => {
    render(<Timer />);
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    const timer = screen.getByText(/timer: 1 seconds/i, {exact: false});
    expect(timer).toBeInTheDocument();
  });

  test("it should clear interval when unmounted", () => {
    const clearIntervalSpy = jest.spyOn(window, 'clearInterval');
    const { unmount } = render(<Timer />);
    unmount();
    expect(clearIntervalSpy).toHaveBeenCalledTimes(1);
  });

});
