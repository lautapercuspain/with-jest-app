```jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

test('renders checkbox with label', () => {
  const { getByLabelText } = render(
    <Checkbox checked={false} onChange={() => {}} label="Checkbox label" />
  );
  const checkboxLabel = getByLabelText('Checkbox label');
  expect(checkboxLabel).toBeInTheDocument();
});

test('calls onChange function when checkbox is clicked', () => {
  const onChangeMock = jest.fn();
  const { getByLabelText } = render(
    <Checkbox checked={false} onChange={onChangeMock} label="Checkbox label" />
  );
  const checkbox = getByLabelText('Checkbox label');
  fireEvent.click(checkbox);
  expect(onChangeMock).toHaveBeenCalledTimes(1);
});
```

OR

```jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  test('renders checkbox with label', () => {
    const { getByLabelText } = render(
      <Checkbox checked={false} onChange={() => {}} label="Checkbox label" />
    );
    const checkboxLabel = getByLabelText('Checkbox label');
    expect(checkboxLabel).toBeInTheDocument();
  });

  test('calls onChange function when checkbox is clicked', () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(
      <Checkbox checked={false} onChange={onChangeMock} label="Checkbox label" />
    );
    const checkbox = getByLabelText('Checkbox label');
    fireEvent.click(checkbox);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
```