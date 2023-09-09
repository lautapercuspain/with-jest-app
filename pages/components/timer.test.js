import React from 'react';
import { render, cleanup, waitFor, fireEvent } from '@testing-library/react';
import Timer from './Timer';

jest.useFakeTimers();

describe('<Timer />', () => {
  afterEach(cleanup);

  it('should correctly increment seconds after every 1 second', async () => {
    const { getByText } = render(<Timer />);

    expect(getByText('Timer: 0 seconds')).toBeInTheDocument();
    
    jest.advanceTimersByTime(1000);
    await waitFor(() => expect(getByText('Timer: 1 seconds')).toBeInTheDocument());

    jest.advanceTimersByTime(1000);
    await waitFor(() => expect(getByText('Timer: 2 seconds')).toBeInTheDocument());
  });

  it('should cleanup on component unmount', async () => {
    const clearIntervalMock = jest.spyOn(window, 'clearInterval');
    const { unmount } = render(<Timer />);

    unmount();
    expect(clearIntervalMock).toHaveBeenCalledTimes(1);
  });
});