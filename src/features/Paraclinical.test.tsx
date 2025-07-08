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
import Paraclinical from "./Paraclinical";
import { paraclinicalData } from "@/data/mockData";

// Mock the Zustand store
vi.mock("@/lib/store", () => ({
  useUIStore: vi.fn(),
}));

import { useUIStore } from "@/lib/store";

describe("Paraclinical", () => {
  const mockShowSnackbar = vi.fn();

  beforeEach(() => {
    (useUIStore as any).mockReturnValue({
      showSnackbar: mockShowSnackbar,
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
      render(<Paraclinical data={[]} />);
      expect(screen.getByText("Paraclínicos")).toBeInTheDocument();
      expect(screen.getByText("No hay datos para mostrar")).toBeInTheDocument();
    });

    it("should be expandable in empty state", async () => {
      render(<Paraclinical data={[]} />);
      const expandButton = screen.getByTestId("widget-expand-button");
      expect(expandButton).toHaveClass("cursor-pointer");
    });
  });

  describe("With Data", () => {
    it("should render all paraclinical items", () => {
      render(<Paraclinical data={paraclinicalData} />);
      expect(screen.getByText("Paraclínicos")).toBeInTheDocument();
      paraclinicalData.forEach((item) => {
        expect(screen.getByText(item.name)).toBeInTheDocument();
        expect(screen.getByText(item.result)).toBeInTheDocument();
      });
    });

    it("should render details button when details prop is present", () => {
      render(<Paraclinical data={paraclinicalData} />);
      const detailButtons = screen.getAllByTestId("widget-item-details-button");
      expect(detailButtons).toHaveLength(paraclinicalData.length);
    });

    it("should call showSnackbar when clicking on details button", async () => {
      render(<Paraclinical data={paraclinicalData} />);
      const firstDetailButton = screen.getAllByTestId(
        "widget-item-details-button"
      )[0];
      await userEvent.click(firstDetailButton);
      expect(mockShowSnackbar).toHaveBeenCalledWith(
        `Ver detalles de: ${paraclinicalData[0].name}`,
        "warning"
      );
    });

    it("should be expandable when data is present", async () => {
      render(<Paraclinical data={paraclinicalData} />);
      const expandButton = screen.getByTestId("widget-expand-button");
      expect(expandButton).toHaveClass("cursor-pointer");
    });

    it("should display icons for paraclinical items", () => {
      render(<Paraclinical data={paraclinicalData} />);
      paraclinicalData.forEach((item) => {
        const iconElements = document.querySelectorAll(
          `[class*="${item.iconColor}"]`
        );
        expect(iconElements.length).toBeGreaterThan(0);
      });
    });
  });
});
