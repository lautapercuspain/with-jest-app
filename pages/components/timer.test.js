import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Timer from './Timer';

describe('Timer', () => {
  jest.useFakeTimers();

  afterEach(() => {
    jest.clearAllTimers();
  });

  test('renders Timer component with initial state', () => {
    const { getByText } = render(<Timer />);
    expect(getByText('Timer: 0 seconds')).toBeInTheDocument();
  });

  test('renders Timer and updates every second', async () => {
    const { getByText } = render(<Timer />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(getByText('Timer: 1 seconds')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(getByText('Timer: 2 seconds')).toBeInTheDocument();
  });

  test('clean up on component unmount', () => {
    const { unmount } = render(<Timer />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    unmount();

    expect(clearInterval).toHaveBeenCalledTimes(1);
  });
});