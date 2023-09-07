import React from 'react';
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

afterEach(cleanup);

describe('Button', () => {
  test('renders Button component', async () => {
    const { getByRole } = render(<Button onClick={() => {}} text="Click me"/>);
    const button = getByRole('button');
    await waitFor(() => {
      expect(button).toBeInTheDocument();
    });
  });

  test('renders correct text', async () => {
    const { getByText } = render(<Button onClick={() => {}} text="Click me"/>);
    const button = getByText('Click me');
    await waitFor(() => {
      expect(button).toBeInTheDocument();
    });
  });

  test('onClick function is called when button is clicked', async () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick} text="Click me"/>);

    const button = getByRole('button');
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(onClick).toHaveBeenCalled();
    });
  });
});