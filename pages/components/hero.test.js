import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import Hero from "./Hero";
import React from 'react';

afterEach(cleanup);

test("Hero renders correctly and changes images on click", async () => {
  const props = {
    title: "Test title",
    subtitle: "Test subtitle",
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
  };

  render(<Hero {...props} />);

  const title = screen.getByRole("heading", { name: props.title });
  const subtitle = screen.getByText(props.subtitle);
  const prevButton = screen.getByRole("button", { name: "Previous" });
  const nextButton = screen.getByRole("button", { name: "Next" });
  const image = document.querySelector("img");


  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
  expect(prevButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();
  
  expect(image.src).toContain(props.images[0]);

  fireEvent.click(nextButton);
  expect(image.src).toContain(props.images[1]);

  fireEvent.click(nextButton);
  expect(image.src).toContain(props.images[2]);

  fireEvent.click(nextButton);
  expect(image.src).toContain(props.images[0]);

  fireEvent.click(prevButton);
  expect(image.src).toContain(props.images[2]);
});