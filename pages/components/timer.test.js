import React from "react";
import { render, fireEvent, waitFor, screen, cleanup } from "@testing-library/react";
import Timer from "./Timer";
import '@testing-library/jest-dom';

afterEach(cleanup);

test('should render Timer component', () => {
  render(<Timer />);
  const timerNode = screen.getByText('Timer: 0 seconds');
  expect(timerNode).toBeInTheDocument();
});

test('should increment second after 1 second', async () => {
  jest.useFakeTimers();
  render(<Timer />);
  jest.advanceTimersByTime(1000);
  await waitFor(() => screen.getByText('Timer: 1 seconds'));
  jest.useRealTimers();
});