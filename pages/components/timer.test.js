import React from 'react';
import { render, fireEvent, act, cleanup, waitFor } from '@testing-library/react';
import Timer from './Timer';

afterEach(cleanup);

test('should render Timer without crashing', () => {
  render(<Timer />);
});

test('should start at zero', () => {
  const { getByText } = render(<Timer />);
  expect(getByText(/Timer: 0 seconds/i)).toBeInTheDocument();
});

test('should increment by one after 1 second', async () => {
  jest.useFakeTimers();
  const { getByText } = render(<Timer />);
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  await waitFor(() => expect(getByText(/Timer: 1 seconds/i)).toBeInTheDocument());
});