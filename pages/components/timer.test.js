import React from 'react';
import { render, cleanup, screen, act, fireEvent } from '@testing-library/react';
import Timer from './Timer';

jest.useFakeTimers();

afterEach(cleanup);

describe("Timer", () => {
    it("renders with initial state of 0 seconds", () => {
        render(<Timer />);
        expect(screen.getByText(/Timer: 0 seconds/i)).toBeInTheDocument();
    });

    it("increments seconds every 1000ms", () => {
        render(<Timer />);
        act(() => {
            jest.advanceTimersByTime(1000);
        });
        expect(screen.getByText(/Timer: 1 seconds/i)).toBeInTheDocument();
    });

    it("clears interval on component unmount", () => {
        const clearIntervalMock = jest.spyOn(window, 'clearInterval');
        const { unmount } = render(<Timer />);
        unmount();
        expect(clearIntervalMock).toHaveBeenCalled();
    });
});