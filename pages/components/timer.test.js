Firstly, we will start by installing Jest and React Testing Library in your project. You can do this by running npm install --save-dev jest @testing-library/react or yarn add --dev jest @testing-library/react.

Now, let's assume we have the Timer.js component, and we want to test the Timer is rendered and contains the right content, and that it increments correctly when started:


import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Timer from './Timer';

// Create a mock of setInterval
let setIntervalMock = jest.spyOn(window, 'setInterval');

describe('Timer', () => {
  beforeEach(() => {
    setIntervalMock = jest.spyOn(window, 'setInterval');
    jest.useFakeTimers();
  });

  afterEach(() => {
    setIntervalMock.mockClear();
    jest.useRealTimers();
  });

  it('should render and contain the right content', () => {
    render(<Timer />);
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /start/i })).toBeInTheDocument();
  });

  it('should increment correctly when started', async () => {
    render(<Timer />);
    const startButton = screen.getByRole('button', { name: /start/i });

    fireEvent.click(startButton);
    
    expect(setIntervalMock).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);

    await waitFor(() => expect(screen.getByText('1')).toBeInTheDocument());
    // check again after another second
    jest.advanceTimersByTime(1000);

    await waitFor(() => expect(screen.getByText('2')).toBeInTheDocument());
  });
});
```

Please note that your Timer component should be designed to work with the above test. The test assumes that the Timer component contains a display for the current count and a "Start" button to start the timer. 

The setInterval mock is used to control the timers in the Timer component, this allows us to manually advance time in the tests and check the Timer displays the correct time. 

The test uses the getByRole query to find the "Start" button in the Timer component, and the getByText to find the current count. 

Then, the fireEvent function is used to simulate a user clicking the "Start" button in the Timer component. 

Finally, the waitFor function is used to wait until the Timer component updates with the new count. 

The tests also make sure to clean up after each test by clearing mocks and restoring real timers.