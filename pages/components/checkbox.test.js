```javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

test('Checkbox should render with correct label', () => {
  const labelText = 'Test Label';
  const { container } = render(<Checkbox label={labelText} />);
  const labelElement = container.querySelector('label');
  expect(labelElement).toHaveTextContent(labelText);
});

test('Checkbox should call onChange function when clicked', () => {
  const onChangeMock = jest.fn();
  const { container } = render(
    <Checkbox checked={false} onChange={onChangeMock} />
  );
  const checkboxElement = container.querySelector('input[type="checkbox"]');
  fireEvent.click(checkboxElement);
  expect(onChangeMock).toHaveBeenCalledTimes(1);
});

```