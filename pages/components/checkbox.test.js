```javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  test('should render checkbox with label', () => {
    const { getByLabelText } = render(<Checkbox checked={false} onChange={() => {}} label="Click me" />);
    const checkbox = getByLabelText('Click me');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  test('should toggle checkbox when clicked', () => {
    let isChecked = false;
    const handleChange = () => {
      isChecked = !isChecked;
    };

    const { getByLabelText } = render(<Checkbox checked={isChecked} onChange={handleChange} label="Click me" />);
    const checkbox = getByLabelText('Click me');

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
```