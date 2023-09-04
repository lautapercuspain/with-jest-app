import React from 'react'
import { render, cleanup, fireEvent, act, waitFor } from '@testing-library/react'
import Timer from './Timer'

afterEach(cleanup);

describe("Timer Component", () => {
  test("renders Timer", () => {
    const { getByText } = render(<Timer />);
    expect(getByText(/Timer: 0 seconds/i)).toBeInTheDocument();
  });

  test("Timer increments every second", async () => {
    jest.useFakeTimers();
    const { getByText } = render(<Timer />);
    expect(getByText(/Timer: 0 seconds/i)).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    await waitFor(() => {
      expect(getByText(/Timer: 1 seconds/i)).toBeInTheDocument();
    });
  });

  test("Timer clears interval when unmounted", async () => {
    jest.useFakeTimers();
    const { getByText, unmount } = render(<Timer />);
    expect(getByText(/Timer: 0 seconds/i)).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    await waitFor(() => {
      expect(getByText(/Timer: 1 seconds/i)).toBeInTheDocument();
    });

    unmount();

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(jest.getTimerCount()).toBe(0);
  });
});