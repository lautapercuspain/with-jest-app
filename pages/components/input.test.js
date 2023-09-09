import React from 'react';
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import TextInput from './TextInput';

afterEach(cleanup);

test('TextInput Component', async () => {
  const mockOnChange = jest.fn();
  const props = {
    id: 'test-input',
    label: 'Test',
    type: 'text',
    value: 'Initial value',
    onChange: mockOnChange,
    placeholder: 'Enter text',
  }
  const { getByLabelText, getByRole } = render(<TextInput {...props} />);
  const label = getByLabelText(/test/i, { exact: false });

  fireEvent.change(label, { target: { value: 'New value' } });

  await waitFor(() => {
    expect(label.value).toBe('New value');
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});