import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Timer from './Timer';

describe('Timer', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should render Timer', () => {
    const { getByText } = render(<Timer />);
    getByText(/Timer: 0 seconds/i);
  });

  test('should increment seconds after 1 second', async () => {
    const { getByText } = render(<Timer />);
    fireEvent.click(getByText(/start/i));
    jest.advanceTimersByTime(1000);
    await waitFor(() => getByText(/Timer: 1 second/i));
  });

  test('should clear interval after component is unmounted', () => {
    const clearIntervalMock = jest.spyOn(window, 'clearInterval');
    const { unmount } = render(<Timer />);

    unmount();
    expect(clearIntervalMock).toHaveBeenCalled();
  });
});