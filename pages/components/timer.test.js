import React from 'react';
import { render, cleanup, act, fireEvent } from '@testing-library/react';
import Timer from './Timer';

jest.useFakeTimers();

afterEach(cleanup);

test('Timer should start at 0 second', () => {
    const { getByText } = render(<Timer />);
    getByText('Timer: 0 seconds');
});

test('Timer should show 1 second after 1 second', () => {
    const { getByText } = render(<Timer />);

    act(() => {
        jest.advanceTimersByTime(1000);
    });

    getByText('Timer: 1 seconds');
});

test('Timer should clear interval on unmount', () => {
    const { unmount } = render(<Timer />);

    act(() => {
        jest.advanceTimersByTime(1000);
    });

    unmount();

    act(() => {
        jest.advanceTimersByTime(1000);
    });

    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(clearInterval).toHaveBeenCalledTimes(1);
});
