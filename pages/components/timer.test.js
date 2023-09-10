import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import Timer from "./Timer";
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom'

jest.useFakeTimers();

describe("Timer", () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  test("it should increment every second", async () => {
    render(<Timer />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    await waitFor(() => screen.getByText("Timer: 1 seconds"));

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    await waitFor(() => screen.getByText("Timer: 2 seconds"));
  });
});