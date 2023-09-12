import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Hero from "./Hero";

afterEach(cleanup);

describe("Hero", () => {
  test("renders Hero with images and control buttons", () => {
    const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
    const title = "Hero Title";
    const subtitle = "Hero Subtitle";

    render(<Hero title={title} subtitle={subtitle} images={images} />);

    const prevButton = screen.getByRole("button", { name: /previous/i });
    const nextButton = screen.getByRole("button", { name: /next/i });
    const image = screen.getByRole("img");

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  test("navigates to next images on 'next' button click", () => {
    const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
    render(<Hero title="Title" subtitle="Subtitle" images={images} />);

    const nextButton = screen.getByRole("button", { name: /next/i });

    fireEvent.click(nextButton);
    let image = screen.getByRole("img", {
      name: /slide 1/i,
    });

    expect(image.src).toContain("image2.jpg");

    fireEvent.click(nextButton);
    image = screen.getByRole("img", {
      name: /slide 2/i,
    });

    expect(image.src).toContain("image3.jpg");
  });

  test("navigates to previous images on 'previous' button click", () => {
    const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
    render(<Hero title="Title" subtitle="Subtitle" images={images} />);

    const prevButton = screen.getByRole("button", { name: /previous/i });

    fireEvent.click(prevButton);
    let image = screen.getByRole("img", {
      name: /slide 2/i,
    });

    expect(image.src).toContain("image3.jpg");

    fireEvent.click(prevButton);
    image = screen.getByRole("img", {
      name: /slide 1/i,
    });

    expect(image.src).toContain("image2.jpg");
  });
});