```
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  test('renders checkbox input correctly', () => {
    const { container } = render(
      <Checkbox checked={false} onChange={() => {}} label="Test Checkbox" />
    );

    const checkbox = container.querySelector('input[type="checkbox"]');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBe(false);
  });

  test('calls onChange prop when checkbox is clicked', () => {
    const onChangeMock = jest.fn();
    const { container } = render(
      <Checkbox checked={false} onChange={onChangeMock} label="Test Checkbox" />
    );

    const checkbox = container.querySelector('input[type="checkbox"]');
    fireEvent.click(checkbox);
    expect(onChangeMock).toHaveBeenCalled();
  });
});
```

Explanation of the tests:
- The first test checks if the checkbox input is rendered correctly by verifying its existence and initial checked state.
- The second test checks if the onChange prop is called when the checkbox is clicked. It simulates a click event on the checkbox using the `fireEvent.click` function from React Testing Library and expects the `onChangeMock` function to have been called.