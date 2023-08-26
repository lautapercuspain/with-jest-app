```jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  test('renders correctly', () => {
    const { getByLabelText } = render(
      <Checkbox checked={false} onChange={() => {}} label="Checkbox Label" />
    );
  
    const checkboxInput = getByLabelText('Checkbox Label');
  
    expect(checkboxInput).toBeInTheDocument();
    expect(checkboxInput.checked).toBe(false);
  });
  
  test('calls onChange correctly', () => {
    const onChangeMock = jest.fn();
  
    const { getByLabelText } = render(
      <Checkbox checked={false} onChange={onChangeMock} label="Checkbox Label" />
    );
  
    const checkboxInput = getByLabelText('Checkbox Label');
  
    fireEvent.click(checkboxInput);
  
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(true);
  });
});
```

Note: Remember to install `@testing-library/react` and `jest` if you haven't already.