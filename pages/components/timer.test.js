import React from 'react';
import { render, cleanup, screen, act } from '@testing-library/react';
import Timer from './Timer';

afterEach(cleanup);

jest.useFakeTimers();

test('should render Timer component and increment every second', () => {

  render(<Timer />);
  expect(screen.getByText('Timer: 0 seconds')).toBeInTheDocument();

  act(() => {
    jest.advanceTimersByTime(1000);
  });

  expect(screen.getByText('Timer: 1 seconds')).toBeInTheDocument();

  act(() => {
    jest.advanceTimersByTime(1000);
  });

  expect(screen.getByText('Timer: 2 seconds')).toBeInTheDocument();
});