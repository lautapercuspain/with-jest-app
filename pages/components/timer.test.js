import { act } from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Timer from './Timer';

afterEach(cleanup);

test('should render Timer component', () => {
  const { getByText } = render(<Timer />);
  expect(getByText(/Timer: 0 seconds/i)).toBeInTheDocument();
});


test('should increase timer after 1 second', async () => {
  jest.useFakeTimers();
  
  const { getByText } = render(<Timer />);
  
  act(() => {
    jest.advanceTimersByTime(1000);
  });

  await waitFor(() => expect(getByText(/Timer: 1 seconds/i)).toBeInTheDocument());
  
  jest.useRealTimers();
});


test('should clean up on component unmount', () => {
  jest.useFakeTimers();
  
  const { getByText, unmount } = render(<Timer />);
  unmount();
  
  act(() => {
    jest.advanceTimersByTime(1000);
  });

  expect(jest.getTimerCount()).toBe(0);
  
  jest.useRealTimers();
});
