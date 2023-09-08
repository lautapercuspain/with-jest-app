import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Button from './Button';

afterEach(cleanup);

describe('Button', () => {
  test('renders Button component', () => {
    const { getByRole } = render(<Button onClick={() => {}} text="Click me"/>);
    expect(getByRole('button')).toBeInTheDocument();
  });

  test('renders correct text', () => {
    const { getByRole } = render(<Button onClick={() => {}} text="Click me"/>);
    expect(getByRole('button')).toHaveTextContent('Click me');
  });

  test('onClick function is called when button is clicked', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick} text="Click me"/>);

    fireEvent.click(getByRole('button'));
    
    expect(onClick).toHaveBeenCalled();
  });
});