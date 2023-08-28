import React from 'react';
import { render, cleanup, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe("Card component", () => {
  
  afterEach(cleanup);

  test("should display title and content", async () => {
    const { getByText } = render(<Card title="Test Title" content="Test Content" />);
    expect(getByText("Test Title")).toBeInTheDocument();
    expect(getByText("Test Content")).toBeInTheDocument();
  });

  test("should display image if imageUrl is passed", async () => {
    const { getByAltText } = render(<Card title="Test Title" imageUrl="http://test.com" />);
    await waitFor(() => expect(getByAltText("Test Title")).toHaveAttribute('src', 'http://test.com'));
  });

  test("should not display image if imageUrl is not passed", async () => {
    const { queryByAltText } = render(<Card title="Test Title" />);
    await waitFor(() => expect(queryByAltText("Test Title")).not.toBeInTheDocument());
  });
});