import React from 'react';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import Timer from './Timer';

afterEach(cleanup);

describe('Timer', () => {

  test('renders Timer component', () => {
    render(<Timer />);
    const timerText = screen.getByText(/Timer App/i);

    expect(timerText).toBeInTheDocument();
  });

  test('updates count on button click', async () => {
    render(<Timer />);
    const button = screen.getByRole('button', { name: /Start/i });

    fireEvent.click(button);

    await waitFor(() => {
      const timerCount = screen.getByText(/1s/i);
      expect(timerCount).toBeInTheDocument();
    });
  });

  test('clears interval on button click', () => {
    const clearIntervalSpy = jest.spyOn(window, 'clearInterval');

    render(<Timer />);
    const startButton = screen.getByRole('button', { name: /Start/i });
    const stopButton = screen.getByRole('button', { name: /Stop/i });

    fireEvent.click(startButton);
    fireEvent.click(stopButton);

    expect(clearIntervalSpy).toHaveBeenCalled();
  });

});
