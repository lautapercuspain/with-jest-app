import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Dropdown from './Dropdown';

test('Check dropdown selections', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ];

  const mockOnChange = jest.fn();
  const { getByLabelText } = render(
      <Dropdown options={options} value={options[0].value} onChange={mockOnChange} label="Test Dropdown" />
  );

  const select = getByLabelText("Test Dropdown");

  fireEvent.change(select, { target: { value: options[1].value } });

  expect(mockOnChange).toHaveBeenCalledWith(options[1].value);
});