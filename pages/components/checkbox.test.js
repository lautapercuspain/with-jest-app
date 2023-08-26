```jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

test('Checkbox renders correctly', () => {
  const { getByLabelText } = render(
    <Checkbox checked={true} onChange={() => {}} label="Option 1" />
  );

  expect(getByLabelText('Option 1')).toBeInTheDocument();
});

test('Checkbox calls onChange correctly', () => {
  const handleChange = jest.fn();
  const { getByLabelText } = render(
    <Checkbox checked={false} onChange={handleChange} label="Option 2" />
  );
  fireEvent.click(getByLabelText('Option 2'));

  expect(handleChange).toHaveBeenCalled();
});
```