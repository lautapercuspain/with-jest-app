import React from 'react';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Timer from './Timer';

afterEach(() => {
  cleanup();
});

test('renders Timer component', () => {
  render(<Timer />);
  const timerElement = screen.getByText(/timer/i);
  expect(timerElement).toBeInTheDocument();
});

test('timer starts at 0', async () => {
  render(<Timer />);
  const initialTimeElement = await waitFor(() => screen.getByText(/0/i));
  expect(initialTimeElement).toBeInTheDocument();
});

test('timer increments when start clicked', async () => {
  render(<Timer />);
  const startButton = screen.getByRole('button', { name: /start/i });
  fireEvent.click(startButton);
  const incrementedTimeElement = await waitFor(() => screen.getByText(/1/i));
  expect(incrementedTimeElement).toBeInTheDocument();
});