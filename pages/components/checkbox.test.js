import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Checkbox from './Checkbox';

afterEach(cleanup);

describe("Testing Checkbox component", () => {
  test("should render Checkbox component with label", () => {
    const { getByLabelText } = render(
      <Checkbox checked={false} onChange={() => {}} label="Test Label" />
    );
    expect(getByLabelText("Test Label")).toBeInTheDocument();
  });

  test("should handle onChange event", () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(
      <Checkbox checked={false} onChange={onChangeMock} label="Test Label" />
    );

    fireEvent.click(getByRole('checkbox'));
    expect(onChangeMock).toHaveBeenCalled();
  });

  test("should reflect checked state correctly", () => {
    const { getByRole } = render(
      <Checkbox checked={true} onChange={() => {}} label="Test Label" />
    );
    expect(getByRole('checkbox')).toBeChecked();
  });
});
