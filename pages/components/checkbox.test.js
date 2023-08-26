```jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

test('renders checkbox with label', () => {
  const { getByLabelText } = render(<Checkbox checked={false} onChange={() => {}} label="Checkbox Label" />);
  const checkbox = getByLabelText('Checkbox Label');
  
  expect(checkbox).toBeInTheDocument();
  expect(checkbox.checked).toBe(false);
});

test('calls onChange when checkbox is clicked', () => {
  const onChangeMock = jest.fn();
  const { getByLabelText } = render(<Checkbox checked={false} onChange={onChangeMock} label="Checkbox Label" />);
  const checkbox = getByLabelText('Checkbox Label');

  fireEvent.click(checkbox);

  expect(onChangeMock).toHaveBeenCalledTimes(1);
  expect(checkbox.checked).toBe(true);
});
```

Note: Make sure to install `@testing-library/react` and `jest` before running these tests.