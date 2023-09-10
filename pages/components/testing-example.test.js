import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greetings from './Greetings';

test('check Greetings function', () => {
  render(<Greetings name="John" />);
  const element = screen.getByText(/Hi John/i, { exact: false });
  expect(element).toBeInTheDocument();
});