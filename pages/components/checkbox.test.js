```jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

test('Checkbox renders correctly with default props', () => {
  render(<Checkbox checked={false} onChange={() => {}} label="Test Checkbox" />);
  const checkbox = document.querySelector('input[type="checkbox"]');
  const label = document.querySelector('label');
  
  expect(checkbox).toBeInTheDocument();
  expect(checkbox.checked).toBe(false);
  expect(label).toBeInTheDocument();
  expect(label).toHaveTextContent('Test Checkbox');
});

test('Checkbox changes value when clicked', () => {
  let checkedValue = false;
  const handleChange = () => {
    checkedValue = true;
  };
  
  render(<Checkbox checked={checkedValue} onChange={handleChange} label="Test Checkbox" />);
  const checkbox = document.querySelector('input[type="checkbox"]');
  
  expect(checkbox.checked).toBe(false);
  fireEvent.click(checkbox);
  expect(checkedValue).toBe(true);
});
```