import React from "react";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import TextInput from './TextInput';
import '@testing-library/jest-dom';

afterEach(cleanup);

test("Render TextInput and verify onChange event", async () => {
  const mockOnChange = jest.fn();
  const { getByLabelText } = render(
    <TextInput
      id="testTextInput"
      label="Test Input"
      type="text"
      placeholder="Enter text"
      value=""
      onChange={mockOnChange}
    />
  );

  const inputField = getByLabelText("Test Input");
  fireEvent.change(inputField, { target: { value: 'New Value' }});

  await waitFor(() => {
    expect(mockOnChange).toHaveBeenCalled();
    expect(inputField.value).toEqual('New Value');
  });
});