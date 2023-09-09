import React from 'react';
import { render, cleanup, waitFor, screen, fireEvent } from '@testing-library/react';
import Timer from './Timer';
import jest from 'jest-mock';

afterEach(cleanup);

describe('Timer Component', () => {
  
  const clearIntervalMock = jest.spyOn(window, 'clearInterval');
  clearIntervalMock.mockImplementation(() => {});

  it('renders Timer component', async () => {
    render(<Timer />);
    const timerNode = await waitFor(() => screen.getByText(/start/i));
    expect(timerNode).toBeInTheDocument();
  });

  it('should start timer on start button click', async () => {
    render(<Timer />);
    const startButtonNode = await waitFor(() => screen.getByText(/start/i));
    fireEvent.click(startButtonNode);
    const timerValue = await waitFor(() => screen.getByRole('timer'));
    expect(timerValue.textContent).toBeGreaterThan(0);
  });

  it('should pause timer on pause button click', async () => {
    render(<Timer />);
    const startButtonNode = await waitFor(() => screen.getByText(/start/i));
    fireEvent.click(startButtonNode);
    const pauseButtonNode = await waitFor(() => screen.getByText(/pause/i));
    fireEvent.click(pauseButtonNode);
    const currentTimerValue = screen.getByRole('timer').textContent;
    expect(currentTimerValue).toEqual(currentTimerValue);
  });

  it('should reset timer to 0 on reset button click', async () => {
    render(<Timer />);
    const startButtonNode = await waitFor(() => screen.getByText(/start/i));
    fireEvent.click(startButtonNode);
    const resetButtonNode = await waitFor(() => screen.getByText(/reset/i));
    fireEvent.click(resetButtonNode);
    const timerValue = await waitFor(() => screen.getByRole('timer'));
    expect(timerValue.textContent).toEqual('0');
  });

});
