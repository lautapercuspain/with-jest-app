import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Timer from './Timer';

jest.useFakeTimers();

test('initial render should display 0 seconds', () => {
  render(<Timer />);
  expect(screen.getByText('Timer: 0 seconds')).toBeInTheDocument();
});

test('after 1 second, the timer should display 1 second', async () => {
  render(<Timer />);

  jest.advanceTimersByTime(1000);

  await waitFor(() => {
    expect(screen.getByText('Timer: 1 seconds')).toBeInTheDocument();
  });
});

test('after 5 seconds, the timer should display 5 seconds', async () => {
  render(<Timer />);

  jest.advanceTimersByTime(5000);

  await waitFor(() => {
    expect(screen.getByText('Timer: 5 seconds')).toBeInTheDocument();
  });
});