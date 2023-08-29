import React from 'react';
import Button from './Button';
import { render, cleanup, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('Button', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(<Button onClick={() => {}} text="Click me" />);
    expect(getByRole('button')).toHaveTextContent('Click me');
  });

  it('calls onClick prop when clicked', async () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<Button onClick={handleClick} text="Click me" />);

    act(() => {
      fireEvent.click(getByRole('button'));
    });

    await waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1));
  });

  it('does not call onClick if it has not been clicked', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<Button onClick={handleClick} text="Click me" />);

    expect(handleClick).not.toHaveBeenCalled();
  });
});