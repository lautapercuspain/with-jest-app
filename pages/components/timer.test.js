import React from 'react';
import { render, screen, waitFor, cleanup, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Timer from './Timer';

afterEach(cleanup);

jest.useFakeTimers();

describe('<Timer />', () => {
  test('it should increment the seconds every 1 second', async () => {
    const { getByText } = render(<Timer />);
    
    await act(async () => {
      jest.advanceTimersByTime(1000);
    });

    expect(getByText('Timer: 1 seconds')).toBeInTheDocument();
    
    await act(async () => {
      jest.advanceTimersByTime(1000);
    });

    expect(getByText('Timer: 2 seconds')).toBeInTheDocument();
  });
});