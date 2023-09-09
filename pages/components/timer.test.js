import React from 'react';
import { render, screen } from '@testing-library/react';
import Timer from './Timer';

describe('Timer', () => {
  // Mock setInterval
  jest.useFakeTimers();

  beforeEach(() => {
    render(<Timer />);
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  test('renders the initial timer value', () => {
    const initialTime = '5:00';

    expect(screen.getByText(initialTime)).toBeInTheDocument();
  });

  test('updates the timer value after 1 second', () => {
    const updatedTime = '4:59';

    jest.advanceTimersByTime(1000);

    expect(screen.getByText(updatedTime)).toBeInTheDocument();
  });

  test('does not update the timer value before 1 second', () => {
    const initialTime = '5:00';

    expect(screen.getByText(initialTime)).toBeInTheDocument();

    jest.advanceTimersByTime(500);

    expect(screen.getByText(initialTime)).toBeInTheDocument();
  });
});