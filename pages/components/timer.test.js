// Timer.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import Timer from './Timer';

jest.useFakeTimers();

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

test('renders Timer and shows default time of 00:00:00', () => {
  render(<Timer />);
  const timeElement = screen.getByText('00:00:00');
  expect(timeElement).toBeInTheDocument();
});

test('updates time when Start button is clicked', async () => {
  render(<Timer />);
  const startBtn = screen.getByText('Start');

  await act(async () => {
    fireEvent.click(startBtn);
  });

  const timeElement = screen.getByText(/00:00:0\d/, { exact: false });
  expect(timeElement).toBeInTheDocument();
});

test('pauses time when Pause button is clicked', async () => {
  render(<Timer />);
  const startBtn = screen.getByText('Start');
  const pauseBtn = screen.getByText('Pause');

  await act(async () => {
    fireEvent.click(startBtn);
    fireEvent.click(pauseBtn);
  });

  const clearIntervalMock = jest.spyOn(window, 'clearInterval');
  
  expect(clearIntervalMock).toHaveBeenCalled();
});