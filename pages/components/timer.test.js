import React from 'react';
import { render, screen, act, cleanup } from '@testing-library/react';
import jest from 'jest-mock';
import Timer from './Timer';

afterEach(cleanup);

const advanceTimers = (time) => {
  const tick = () => {
    jest.runAllTimers();
    time -= 1000;
    if (time > 0) {
      setTimeout(tick, 1000);
    }
  };
  setTimeout(tick, 1000);
}

describe('Timer', () => {
  jest.useFakeTimers();
  
  test('Timer should increment every second', () => {
    render(<Timer />);
    expect(screen.getByText('Timer: 0 seconds')).toBeInTheDocument();
    act(() => advanceTimers(1000));
    expect(screen.getByText('Timer: 1 seconds')).toBeInTheDocument();
    act(() => advanceTimers(2000));
    expect(screen.getByText('Timer: 3 seconds')).toBeInTheDocument();
  });
});