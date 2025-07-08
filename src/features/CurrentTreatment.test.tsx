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
import CurrentTreatment from "./CurrentTreatment";
import { currentTreatmentData } from "@/data/mockData";

// Mock the Zustand store
vi.mock("@/lib/store", () => ({
  useUIStore: vi.fn(),
}));

import { useUIStore } from "@/lib/store";

describe("CurrentTreatment", () => {
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
      render(<CurrentTreatment data={[]} />);
      expect(screen.getByText("Tratamiento actual")).toBeInTheDocument();
      expect(screen.getByText("No hay datos para mostrar")).toBeInTheDocument();
    });

    it("should be expandable in empty state", async () => {
      render(<CurrentTreatment data={[]} />);
      const expandButton = screen.getByTestId("widget-expand-button");
      expect(expandButton).toHaveClass("cursor-pointer");
    });
  });

  describe("With Data", () => {
    it("should render all treatment items", () => {
      render(<CurrentTreatment data={currentTreatmentData} />);
      expect(screen.getByText("Tratamiento actual")).toBeInTheDocument();
      currentTreatmentData.forEach((item) => {
        const combinedTitle = `${item.name} ${item.dose}`;
        expect(screen.getByText(combinedTitle)).toBeInTheDocument();
      });
    });

    describe("Details button:", () => {
      it("should NOT render details button if details prop is missing", () => {
        const dataWithoutDetails = currentTreatmentData.map((item) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { details, ...itemWithoutDetails } = item;
          return itemWithoutDetails;
        });
        render(<CurrentTreatment data={dataWithoutDetails} />);
        const detailButtons = screen.queryAllByTestId(
          "widget-item-details-button"
        );
        expect(detailButtons).toHaveLength(0);
      });

      it("should render details button when details prop is present", () => {
        const dataWithDetails = currentTreatmentData.map((item) => ({
          ...item,
          details: "Detalle de prueba",
        }));
        render(<CurrentTreatment data={dataWithDetails} />);
        const detailButtons = screen.getAllByTestId(
          "widget-item-details-button"
        );
        expect(detailButtons).toHaveLength(dataWithDetails.length);
      });

      it("should call showSnackbar when clicking on details button", async () => {
        const dataWithDetails = currentTreatmentData.map((item) => ({
          ...item,
          details: "Detalle de prueba",
        }));
        render(<CurrentTreatment data={dataWithDetails} />);
        const firstDetailButton = screen.getAllByTestId(
          "widget-item-details-button"
        )[0];
        await userEvent.click(firstDetailButton);
        const firstItem = dataWithDetails[0];
        const expectedTitle = `${firstItem.name} ${firstItem.dose}`;
        expect(mockShowSnackbar).toHaveBeenCalledWith(
          `Ver detalles de: ${expectedTitle}`,
          "info"
        );
      });
    });

    it("should be expandable when data is present", async () => {
      render(<CurrentTreatment data={currentTreatmentData} />);
      const expandButton = screen.getByTestId("widget-expand-button");
      expect(expandButton).toHaveClass("cursor-pointer");
    });

    it("should display item details correctly", () => {
      render(<CurrentTreatment data={currentTreatmentData} />);
      const firstItem = currentTreatmentData[0];
      const combinedTitle = `${firstItem.name} ${firstItem.dose}`;
      expect(screen.getByText(combinedTitle)).toBeInTheDocument();
    });

    it("should display icons for treatment items", () => {
      render(<CurrentTreatment data={currentTreatmentData} />);
      currentTreatmentData.forEach((item) => {
        const iconElements = document.querySelectorAll(
          `[class*="${item.iconColor}"]`
        );
        expect(iconElements.length).toBeGreaterThan(0);
      });
    });
  });
});
