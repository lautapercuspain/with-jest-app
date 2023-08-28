import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Timer from './Timer';

afterEach(cleanup);

test('renders Timer component without crash', () => {
  render(<Timer />);
});

test('Timer component should initially render 0 seconds', () => {
  const { getByText } = render(<Timer />);
  expect(getByText("Timer: 0 seconds")).toBeInTheDocument();
});

test('Timer component should increment seconds after 1 second', async () => {
  jest.useFakeTimers();
  const { getByText } = render(<Timer />);
  expect(getByText("Timer: 0 seconds")).toBeInTheDocument();

  jest.advanceTimersByTime(1000);

  await waitFor(() => expect(getByText("Timer: 1 seconds")).toBeInTheDocument());
});