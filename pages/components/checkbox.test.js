Here are two unit tests for the Checkbox component using React Testing Library:

```jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

test('renders checkbox with label', () => {
  const label = 'Test Checkbox';
  const { getByLabelText } = render(<Checkbox label={label} />);
  const checkbox = getByLabelText(label);

  expect(checkbox).toBeInTheDocument();
  expect(checkbox.type).toBe('checkbox');
});

test('fires onChange event when checkbox is clicked', () => {
  const onChange = jest.fn();
  const { getByLabelText } = render(<Checkbox label="Test Checkbox" onChange={onChange} />);
  const checkbox = getByLabelText('Test Checkbox');

  fireEvent.click(checkbox);

  expect(onChange).toHaveBeenCalledTimes(1);
});
```

The first test checks if the Checkbox component renders correctly with the provided label. It uses the `getByLabelText` function from React Testing Library to find the input element by its associated label text and then asserts that the input element is in the document and has the correct type of "checkbox".

The second test checks if the `onChange` event is fired when the checkbox is clicked. It uses the `getByLabelText` function to find the input element and the `fireEvent` function to simulate a click event on the checkbox. It then asserts that the `onChange` function was called exactly once.