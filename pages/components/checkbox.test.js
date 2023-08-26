import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  test('renders checkbox with label', () => {
    const { getByLabelText } = render(<Checkbox label="Test label" checked={false} onChange={() => {}} />);
    expect(getByLabelText('Test label')).toBeInTheDocument();
  });

  test('renders checkbox as checked', () => {
    const { getByLabelText } = render(<Checkbox label="Test label" checked={true} onChange={() => {}} />);
    const checkbox = getByLabelText('Test label');
    expect(checkbox.checked).toEqual(true);
  });

  test('renders checkbox as unchecked', () => {
    const { getByLabelText } = render(<Checkbox label="Test label" checked={false} onChange={() => {}} />);
    const checkbox = getByLabelText('Test label');
    expect(checkbox.checked).toEqual(false);
  });

  test('triggers onChange on click', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(<Checkbox label="Test label" checked={false} onChange={onChange} />);
    const checkbox = getByLabelText('Test label');
    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalled();
  });
});