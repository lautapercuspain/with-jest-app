import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Checkbox from './Checkbox';

afterEach(cleanup);

test('renders correctly', () => {
    const { getByRole } = render(<Checkbox checked={false} onChange={() => {}} label="Test Checkbox" />);
    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
});

test('can be checked', () => {
    const mockOnChange = jest.fn();
    const { getByRole } = render(<Checkbox checked={false} onChange={mockOnChange} label="Test Checkbox" />);
    const checkbox = getByRole('checkbox');
    
    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalled();
});

test('displays label', () => {
    const { getByText } = render(<Checkbox checked={false} onChange={() => {}} label="Test Checkbox" />);
    const label = getByText('Test Checkbox');
    expect(label).toBeInTheDocument();
});