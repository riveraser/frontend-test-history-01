import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Tab from "./Tab";

describe("Tab", () => {
  it("should render tab with label", () => {
    const mockOnClick = vi.fn();

    render(<Tab label="Test Tab" isActive={false} onClick={mockOnClick} />);

    expect(screen.getByText("Test Tab")).toBeInTheDocument();
  });

  it("should call onClick when clicked", () => {
    const mockOnClick = vi.fn();

    render(<Tab label="Test Tab" isActive={false} onClick={mockOnClick} />);

    const tab = screen.getByText("Test Tab");
    fireEvent.click(tab);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  describe("Styles", () => {
    it("should have active styles when isActive is true", () => {
      const mockOnClick = vi.fn();

      render(<Tab label="Test Tab" isActive={true} onClick={mockOnClick} />);

      const tab = screen.getByText("Test Tab");
      expect(tab).toHaveClass("bg-(--health-tab-active-bg)");
      expect(tab).toHaveClass("text-(--health-tab-active-text)");
    });

    it("should have inactive styles when isActive is false", () => {
      const mockOnClick = vi.fn();

      render(<Tab label="Test Tab" isActive={false} onClick={mockOnClick} />);

      const tab = screen.getByText("Test Tab");
      expect(tab).toHaveClass("bg-(--health-tab-inactive-bg)");
      expect(tab).toHaveClass("text-(--health-tab-inactive-text)");
    });

    it("should have hover styles for inactive tabs", () => {
      const mockOnClick = vi.fn();

      render(<Tab label="Test Tab" isActive={false} onClick={mockOnClick} />);

      const tab = screen.getByText("Test Tab");
      expect(tab).toHaveClass("hover:text-(--health-tab-active-text)");
    });
  });
});
