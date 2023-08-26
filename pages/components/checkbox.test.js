```jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

test('Checkbox renders with correct label', () => {
  const label = 'Test Checkbox';
  const { getByText } = render(<Checkbox label={label} />);
  const checkboxLabel = getByText(label);
  expect(checkboxLabel).toBeInTheDocument();
});

test('Checkbox checked state updates on change', () => {
  const label = 'Test Checkbox';
  const onChange = jest.fn();
  const { getByLabelText } = render(
    <Checkbox label={label} checked={false} onChange={onChange} />
  );

  const checkboxInput = getByLabelText(label);
  fireEvent.click(checkboxInput);

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith(true);
});
```