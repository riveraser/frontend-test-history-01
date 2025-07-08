import {
  describe,
  it,
  expect,
  vi,
  afterEach,
  afterAll,
  beforeEach,
  Mock,
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
  const mockShowSnackbar = vi.fn();

  beforeEach(() => {
    (useUIStore as unknown as Mock).mockImplementation((selector) => {
      const state = {
        showSnackbar: mockShowSnackbar,
        snackbar: { message: "", isVisible: false, type: "info" },
        healthDataTab: "TODOS",
        setHealthDataTab: vi.fn(),
        hideSnackbar: vi.fn(),
      };
      return selector ? selector(state) : state;
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
      const expandButton = screen.getByTestId("widget-expand-button");
      expect(expandButton).toHaveClass("cursor-pointer");
    });
  });

  describe("With Data", () => {
    it("should render all plan items", () => {
      render(<Plan data={planData} />);
      expect(screen.getByText("Plan")).toBeInTheDocument();
      planData.forEach((item) => {
        const combinedTitle = `${item.name} ${item.dose}`;
        expect(screen.getByText(combinedTitle)).toBeInTheDocument();
      });
    });

    it("should render details button when details prop is present", () => {
      render(<Plan data={planData} />);
      const detailButtons = screen.getAllByTestId("widget-item-details-button");
      expect(detailButtons).toHaveLength(planData.length);
    });

    it("should call showSnackbar when clicking on details button", async () => {
      render(<Plan data={planData} />);
      const firstDetailButton = screen.getAllByTestId(
        "widget-item-details-button"
      )[0];
      await userEvent.click(firstDetailButton);
      const firstItem = planData[0];
      const expectedTitle = `${firstItem.name} ${firstItem.dose}`;
      expect(mockShowSnackbar).toHaveBeenCalledWith(
        `Ver detalles de: ${expectedTitle}`,
        "info"
      );
    });

    it("should be expandable when data is present", async () => {
      render(<Plan data={planData} />);
      const expandButton = screen.getByTestId("widget-expand-button");
      expect(expandButton).toHaveClass("cursor-pointer");
    });

    it("should display item details correctly", () => {
      render(<Plan data={planData} />);
      const firstItem = planData[0];
      const combinedTitle = `${firstItem.name} ${firstItem.dose}`;
      expect(screen.getByText(combinedTitle)).toBeInTheDocument();
    });

    it("should display icons for plan items", () => {
      render(<Plan data={planData} />);
      planData.forEach((item) => {
        const iconElements = document.querySelectorAll(
          `[class*="${item.iconColor}"]`
        );
        expect(iconElements.length).toBeGreaterThan(0);
      });
    });
  });
});
