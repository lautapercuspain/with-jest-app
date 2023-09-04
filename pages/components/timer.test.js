import React from 'react';
import { render, fireEvent, cleanup, act, waitFor } from '@testing-library/react';
import Timer from './Timer';

jest.useFakeTimers();

afterEach(cleanup);

test('it should render Timer component', () => {
  const { getByText } = render(<Timer />);
  expect(getByText(/Timer: 0 seconds/i)).toBeInTheDocument();
});

test('it should increment seconds after 1 second', async () => {
  const { getByText } = render(<Timer />);
  
  act(() => {
    jest.advanceTimersByTime(1000);
  });

  await waitFor(() => expect(getByText(/Timer: 1 second/i)).toBeInTheDocument());
});

test('it should clear interval on component unmount', () => {
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