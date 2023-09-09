import React from "react";
import { render, screen } from "@testing-library/react";
import Timer from "./Timer";

describe("Timer component", () => {
  test("renders Timer component correctly", () => {
    render(<Timer />);

    const timerElement = screen.getByTestId("timer");
    expect(timerElement).toBeInTheDocument();
  });

  test("correctly displays initial time", () => {
    render(<Timer />);
    const timeElement = screen.getByTestId("time");
    expect(timeElement.textContent).toBe("00:00:00");
  });

  test("starts counting when start button is clicked", () => {
    render(<Timer />);
    const startButton = screen.getByTestId("start-button");
    const timeElement = screen.getByTestId("time");

    expect(timeElement.textContent).toBe("00:00:00");

    fireEvent.click(startButton);

    setTimeout(() => {
      expect(timeElement.textContent).not.toBe("00:00:00");
    }, 1000);
  });
});