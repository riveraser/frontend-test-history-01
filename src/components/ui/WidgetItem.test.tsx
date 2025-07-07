import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import WidgetItem from "./WidgetItem";

describe("WidgetItem", () => {
  it("should render with title", () => {
    render(<WidgetItem title="Test Item" />);

    expect(screen.getByText("Test Item")).toBeInTheDocument();
  });

  it("should render with subtitle", () => {
    render(<WidgetItem title="Test Item" subtitle="Test Subtitle" />);

    expect(screen.getByText("Test Item")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });

  it("should render with date", () => {
    render(<WidgetItem title="Test Item" date="15/03/2024" />);

    expect(screen.getByText("Test Item")).toBeInTheDocument();
    expect(screen.getByText("mar")).toBeInTheDocument();
    expect(screen.getByText("2024")).toBeInTheDocument();
  });

  it("should render with icon", () => {
    render(
      <WidgetItem title="Test Item" icon="heart" iconColor="text-red-500" />
    );

    expect(screen.getByText("Test Item")).toBeInTheDocument();
    // The icon should be rendered as an SVG
    expect(document.querySelector("svg")).toBeInTheDocument();
  });

  describe("Alert", () => {
    it("should render with alert when hasAlert is true", () => {
      render(<WidgetItem title="Test Item" hasAlert={true} />);

      expect(screen.getByText("Test Item")).toBeInTheDocument();
      expect(screen.getByText("!!")).toBeInTheDocument();
    });

    it("should not render alert when hasAlert is false", () => {
      render(<WidgetItem title="Test Item" hasAlert={false} />);

      expect(screen.getByText("Test Item")).toBeInTheDocument();
      expect(screen.queryByText("!!")).not.toBeInTheDocument();
    });

    it("should not render alert when hasAlert is not provided", () => {
      render(<WidgetItem title="Test Item" />);

      expect(screen.getByText("Test Item")).toBeInTheDocument();
      expect(screen.queryByText("!!")).not.toBeInTheDocument();
    });
  });
});
