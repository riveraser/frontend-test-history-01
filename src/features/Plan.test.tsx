import {
  describe,
  it,
  expect,
  vi,
  afterEach,
  afterAll,
  beforeEach,
} from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Plan from "./Plan";
import { planData } from "@/data/mockData";

// Mock the Zustand store
vi.mock("@/lib/store", () => ({
  useUIStore: vi.fn(),
}));

import { useUIStore } from "@/lib/store";

describe("Plan", () => {
  const mockShowSnackbarForItem = vi.fn();

  beforeEach(() => {
    (useUIStore as any).mockReturnValue({
      showSnackbarForItem: mockShowSnackbarForItem,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  describe("Empty State", () => {
    it("should render empty state when no data is provided", () => {
      render(<Plan data={[]} />);

      expect(screen.getByText("Plan")).toBeInTheDocument();
      expect(screen.getByText("No hay datos para mostrar")).toBeInTheDocument();
    });

    it("should be expandable in empty state", async () => {
      render(<Plan data={[]} />);

      // The expandable button should have cursor-pointer class
      const expandButton = screen.getByTestId("widget-expand-button");
      expect(expandButton).toHaveClass("cursor-pointer");
    });
  });

  describe("With Data", () => {
    it("should render all plan items", () => {
      render(<Plan data={planData} />);

      expect(screen.getByText("Plan")).toBeInTheDocument();

      // Check that all items are rendered with their combined title (name + dose)
      planData.forEach((item) => {
        const combinedTitle = `${item.name} ${item.dose}`;
        expect(screen.getByText(combinedTitle)).toBeInTheDocument();
        expect(screen.getByText(item.posology)).toBeInTheDocument();
      });
    });

    it("should render details button when details prop is present", () => {
      render(<Plan data={planData} />);

      // Plan items have details by default, so buttons should be present
      const detailButtons = screen.getAllByTestId("widget-item-details-button");
      expect(detailButtons).toHaveLength(planData.length);
    });

    it("should call showSnackbarForItem when clicking on details button", async () => {
      render(<Plan data={planData} />);

      const firstDetailButton = screen.getAllByTestId(
        "widget-item-details-button"
      )[0];
      await userEvent.click(firstDetailButton);

      const firstItem = planData[0];
      const expectedTitle = `${firstItem.name} ${firstItem.dose}`;
      expect(mockShowSnackbarForItem).toHaveBeenCalledWith(expectedTitle);
    });

    it("should be expandable when data is present", async () => {
      render(<Plan data={planData} />);

      // The expandable button should have cursor-pointer class
      const expandButton = screen.getByTestId("widget-expand-button");
      expect(expandButton).toHaveClass("cursor-pointer");
    });

    it("should display item details correctly", () => {
      render(<Plan data={planData} />);

      const firstItem = planData[0];
      const combinedTitle = `${firstItem.name} ${firstItem.dose}`;
      expect(screen.getByText(combinedTitle)).toBeInTheDocument();
      expect(screen.getByText(firstItem.posology)).toBeInTheDocument();
    });

    it("should display icons for plan items", () => {
      render(<Plan data={planData} />);

      // Check that icons are rendered (they should be present as SVG elements)
      planData.forEach((item) => {
        // The icon should be rendered as an SVG element
        const iconElements = document.querySelectorAll(
          `[class*="${item.iconColor}"]`
        );
        expect(iconElements.length).toBeGreaterThan(0);
      });
    });
  });
});
