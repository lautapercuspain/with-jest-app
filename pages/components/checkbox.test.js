```jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

// Test for rendering the checkbox correctly
test('renders checkbox with label', () => {
  // Render the Checkbox component
  const { getByLabelText } = render(
    <Checkbox checked={false} onChange={() => {}} label="Test Checkbox" />
  );

  // Get the checkbox input element by its associated label
  const checkbox = getByLabelText(/test checkbox/i);

  // Verify that the checkbox is rendered correctly
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).not.toBeChecked();
});

// Test for checking and unchecking the checkbox
test('checks and unchecks the checkbox', () => {
  // Create a mock function for the onChange event
  const handleChange = jest.fn();

  // Render the Checkbox component
  const { getByLabelText } = render(
    <Checkbox checked={false} onChange={handleChange} label="Test Checkbox" />
  );

  // Get the checkbox input element by its associated label
  const checkbox = getByLabelText(/test checkbox/i);

  // Simulate clicking on the checkbox
  fireEvent.click(checkbox);

  // Verify that the onChange event is called with the correct parameters
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(handleChange).toHaveBeenCalledWith(true);

  // Simulate clicking on the checkbox again
  fireEvent.click(checkbox);

  // Verify that the onChange event is called again with the correct parameters
  expect(handleChange).toHaveBeenCalledTimes(2);
  expect(handleChange).toHaveBeenCalledWith(false);
});
```