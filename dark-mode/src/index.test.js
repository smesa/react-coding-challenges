import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AppProviders from "./common/providers/AppProviders";
import Routes from "./routes";

const renderWithProviders = (component) => {
  return render(<AppProviders>{component}</AppProviders>);
};

describe("Routes Component", () => {
    
  beforeEach(() => {
    renderWithProviders(<Routes />);
  });

  it("renders the Routes component", () => {
    const routesElement = screen.getByRole("heading", {
      name: "Dark Mode Challenge",
    });
    expect(routesElement).toBeInTheDocument();
  });

  it("renders the DarkModeToggle component", () => {
    const button = screen.getByTestId("btn-color-toggle");
    expect(button).toBeInTheDocument();

    const htmlElement = document.querySelector("html");
    expect(htmlElement.classList.contains("dark-mode")).toBe(false);
  });

  it("clicking btn-color-toggle toggles dark-mode class on html element", () => {
    const button = screen.getByTestId("btn-color-toggle");
    const htmlElement = document.querySelector("html");

    fireEvent.click(button);
    expect(htmlElement.classList.contains("dark-mode")).toBe(true);

    fireEvent.click(button);
    expect(htmlElement.classList.contains("dark-mode")).toBe(false);
  });
});
