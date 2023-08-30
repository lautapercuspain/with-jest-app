import React from "react";
import { render, fireEvent, waitFor, cleanup } from "@testing-library/react";
import Card from "./Card";

afterEach(cleanup);

it("renders Card component without crashing", () => {
  render(<Card title="Test Title" description="Test Description" />);
});

it("renders image when imageUrl prop exists", () => {
  const { getByRole } = render(
    <Card title="Test Title" imageUrl="test.jpg" description="Test Description" />
  );
  const img = getByRole("img");
  expect(img).toHaveAttribute("src", "test.jpg");
  expect(img).toHaveAttribute("alt", "Test Title");
});

it("does not render image when imageUrl prop does not exist", () => {
  const { queryByRole } = render(
    <Card title="Test Title" description="Test Description" />
  );
  const img = queryByRole("img");
  expect(img).toBeNull();
});

it("renders title and description", () => {
  const { getByText } = render(
    <Card title="Test Title" description="Test Description" />
  );
  expect(getByText("Test Title")).toBeInTheDocument();
  expect(getByText("Test Description")).toBeInTheDocument();
});
