import { describe, it, expect, vi, afterEach, afterAll } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CurrentTreatment from "./CurrentTreatment";
import { currentTreatmentData } from "@/data/mockData";

// Mock console.log to avoid noise in tests since we did not implement the details view
const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

describe("CurrentTreatment", () => {
  afterEach(() => {
    consoleSpy.mockClear();
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  describe("Empty State", () => {
    it("should render empty state when no data is provided", () => {
      render(<CurrentTreatment data={[]} onViewDetails={() => {}} />);

      expect(screen.getByText("Tratamiento actual")).toBeInTheDocument();
      expect(screen.getByText("No hay datos para mostrar")).toBeInTheDocument();
    });

    it("should be expandable in empty state", async () => {
      render(<CurrentTreatment data={[]} onViewDetails={() => {}} />);

      // The expandable button should have cursor-pointer class
      const expandButton = screen.getByTestId("widget-expand-button");
      expect(expandButton).toHaveClass("cursor-pointer");
    });
  });

  describe("With Data", () => {
    it("should render all treatment items", () => {
      render(
        <CurrentTreatment
          data={currentTreatmentData}
          onViewDetails={() => {}}
        />
      );

      expect(screen.getByText("Tratamiento actual")).toBeInTheDocument();

      // Check that all items are rendered with their combined title (name + dose)
      currentTreatmentData.forEach((item) => {
        const combinedTitle = `${item.name} ${item.dose}`;
        expect(screen.getByText(combinedTitle)).toBeInTheDocument();
        expect(screen.getByText(item.posology)).toBeInTheDocument();
      });
    });
    describe("Details button:", () => {
      it("should NOT render details button if details prop is missing", () => {
        render(
          <CurrentTreatment
            data={currentTreatmentData}
            onViewDetails={() => {}}
          />
        );
        // No debe haber ningún botón de detalles
        const detailButtons = screen.queryAllByTestId(
          "widget-item-details-button"
        );
        expect(detailButtons).toHaveLength(0);
      });

      it("should render details button when details prop is present", () => {
        // Clonamos y agregamos details a cada item
        const dataWithDetails = currentTreatmentData.map((item) => ({
          ...item,
          details: "Detalle de prueba",
        }));
        render(
          <CurrentTreatment data={dataWithDetails} onViewDetails={() => {}} />
        );
        const detailButtons = screen.getAllByTestId(
          "widget-item-details-button"
        );
        expect(detailButtons).toHaveLength(dataWithDetails.length);
      });

      it("should call handleViewDetails when clicking on details button", async () => {
        // Usamos datos con details
        const dataWithDetails = currentTreatmentData.map((item) => ({
          ...item,
          details: "Detalle de prueba",
        }));
        const mockOnViewDetails = vi.fn();
        render(
          <CurrentTreatment
            data={dataWithDetails}
            onViewDetails={mockOnViewDetails}
          />
        );
        const firstDetailButton = screen.getAllByTestId(
          "widget-item-details-button"
        )[0];
        await userEvent.click(firstDetailButton);
        expect(mockOnViewDetails).toHaveBeenCalledWith(dataWithDetails[0]);
      });
    });

    it("should be expandable when data is present", async () => {
      render(
        <CurrentTreatment
          data={currentTreatmentData}
          onViewDetails={() => {}}
        />
      );

      // The expandable button should have cursor-pointer class
      const expandButton = screen.getByTestId("widget-expand-button");
      expect(expandButton).toHaveClass("cursor-pointer");
    });

    it("should display item details correctly", () => {
      render(
        <CurrentTreatment
          data={currentTreatmentData}
          onViewDetails={() => {}}
        />
      );

      const firstItem = currentTreatmentData[0];
      const combinedTitle = `${firstItem.name} ${firstItem.dose}`;
      expect(screen.getByText(combinedTitle)).toBeInTheDocument();
      expect(screen.getByText(firstItem.posology)).toBeInTheDocument();
    });

    it("should display icons for treatment items", () => {
      render(
        <CurrentTreatment
          data={currentTreatmentData}
          onViewDetails={() => {}}
        />
      );

      // Check that icons are rendered (they should be present as SVG elements)
      currentTreatmentData.forEach((item) => {
        // The icon should be rendered as an SVG element
        const iconElements = document.querySelectorAll(
          `[class*="${item.iconColor}"]`
        );
        expect(iconElements.length).toBeGreaterThan(0);
      });
    });
  });
});
