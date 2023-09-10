import React from 'react';
import { render, fireEvent, screen, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextInput from './TextInput';

afterEach(cleanup);

describe("TextInput Component", () => {

  const mockOnChange = jest.fn();
  const props = {
    id: 'test-input',
    label: 'Test Label',
    type: 'text',
    value: '',
    onChange: mockOnChange,
    placeholder: 'Enter text'
  };

  it('Renders TextInput correctly', async () => {
    render(<TextInput {...props} />);

    const labelNode = screen.getByText('Test Label');
    const inputNode = screen.getByRole('textbox');

    expect(labelNode).toBeInTheDocument();
    expect(inputNode).toBeInTheDocument();
    expect(inputNode).toHaveAttribute('placeholder', 'Enter text');
  });

  it('Handles onChange correctly', async () => {
    render(<TextInput {...props} />);
 
    const inputNode = screen.getByRole('textbox');
    fireEvent.change(inputNode, { target: { value: 'Testing' }});

    await waitFor(() => expect(mockOnChange).toHaveBeenCalledTimes(1));
  });
});