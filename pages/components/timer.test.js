import React from 'react';
import { render, screen } from '@testing-library/react';
import Timer from './Timer';

test('renders Timer component', () => {
  render(<Timer />);
  
  const timerElement = screen.getByText(/Timer:/i);
  expect(timerElement).toBeInTheDocument();
});
