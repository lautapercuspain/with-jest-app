```jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

test('Checkbox renders with the correct label', () => {
  const label = 'Test Checkbox';
  const { getByLabelText } = render(<Checkbox label={label} />);
  expect(getByLabelText(label)).toBeInTheDocument();
});

test('Checkbox is checked initially if checked prop is true', () => {
  const { getByRole } = render(<Checkbox checked={true} />);
  expect(getByRole('checkbox')).toBeChecked();
});

test('Checkbox calls onChange when clicked', () => {
  const onChange = jest.fn();
  const { getByRole } = render(<Checkbox onChange={onChange} />);
  fireEvent.click(getByRole('checkbox'));
  expect(onChange).toHaveBeenCalled();
});
```