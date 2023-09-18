```typescript
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomInput from './CustomInput';

afterEach(cleanup);

test("test CustomInput component", async () => {
  const { getByRole } = render(<CustomInput type="text" />);
  const inputNode = getByRole('textbox');
  
  fireEvent.change(inputNode, { target: { value: 'test value' }});

  expect(inputNode.value).toBe('test value');
});
```