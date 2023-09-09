import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Timer from './Timer';

describe('Timer component', () => {
  let clearIntervalMock;
  
  beforeEach(() => {
    clearIntervalMock = jest.spyOn(window, 'clearInterval');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('initial render', () => {
    render(<Timer />);
    const timer = screen.getByRole('timer');
    expect(timer).toBeInTheDocument();
    expect(timer).toHaveTextContent('00:00:00');
  });

  test('start timer', async () => {
    render(<Timer />);
    const startButton = screen.getByRole('button', {name: /start/i});
    fireEvent.click(startButton);
    await waitFor(() => expect(clearIntervalMock).toHaveBeenCalled());
  });

  test('reset timer', () => {
    render(<Timer />);
    const resetButton = screen.getByRole('button', {name: /reset/i});
    fireEvent.click(resetButton);
    const timer = screen.getByRole('timer');
    expect(timer).toHaveTextContent('00:00:00');
    expect(clearIntervalMock).toHaveBeenCalled();
  });
});
