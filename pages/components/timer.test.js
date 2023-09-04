import React from 'react';
import { render, act, screen, cleanup, fireEvent } from '@testing-library/react';
import Timer from './Timer';

jest.useFakeTimers();

describe('Timer', () => {
  afterEach(cleanup);

  test('Timer initializes at 0 seconds', () => {
    render(<Timer />);
    expect(screen.getByText('Timer: 0 seconds')).toBeInTheDocument();
  });

  test('Timer increments every second', () => {
    render(<Timer />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByText('Timer: 1 seconds')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByText('Timer: 2 seconds')).toBeInTheDocument();
  });

  test('Timer cleans up on component unmount', () => {
    const clearIntervalMock = jest.spyOn(window, 'clearInterval');
    const { unmount } = render(<Timer />);

    unmount();

    expect(clearIntervalMock).toHaveBeenCalled();
  });
});