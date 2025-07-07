import { describe, it, expect, vi, afterEach, afterAll } from "vitest";
import { render, screen } from "@testing-library/react";
import ClinicalHistory from "./ClinicalHistory";
import { clinicalHistoryData } from "@/data/mockData";
import { formatDate } from "@/utils";
import userEvent from "@testing-library/user-event";

// Mock console.log to avoid noise in tests since we did not implement the details view
const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

describe("ClinicalHistory", () => {
  afterEach(() => {
    consoleSpy.mockClear();
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  describe("Empty State", () => {
    it("should render empty state when no data is provided", () => {
      render(<ClinicalHistory data={[]} />);

      expect(screen.getByText("Historial clínico")).toBeInTheDocument();
      expect(screen.getByText("No hay datos para mostrar")).toBeInTheDocument();
    });

    it("should be expandable in empty state", async () => {
      render(<ClinicalHistory data={[]} />);

      // The expandable button should have cursor-pointer class
      const expandButton = screen.getByRole("button");
      expect(expandButton).toHaveClass("cursor-pointer");
    });
  });

  describe("With Data", () => {
    it("should render all clinical history items", () => {
      render(<ClinicalHistory data={clinicalHistoryData} />);

      expect(screen.getByText("Historial clínico")).toBeInTheDocument();

      // Check that all items are rendered
      clinicalHistoryData.forEach((item) => {
        expect(screen.getByText(item.description)).toBeInTheDocument();
        // The date is formatted by DateDisplay component, so we check for the formatted parts
        const { month, year } = formatDate(item.date);
        expect(screen.getByText(month || "")).toBeInTheDocument();
        expect(screen.getByText(year || "")).toBeInTheDocument();
      });
    });

    it("should render correct number of items", () => {
      render(<ClinicalHistory data={clinicalHistoryData} />);

      // Each item should have a "Ver detalles" button
      const detailButtons = screen.getAllByTestId("widget-item-details-button");
      expect(detailButtons).toHaveLength(clinicalHistoryData.length);
    });

    it("should call handleViewDetails when clicking on details button", async () => {
      render(<ClinicalHistory data={clinicalHistoryData} />);

      const firstDetailButton = screen.getAllByTestId(
        "widget-item-details-button"
      )[0];
      await userEvent.click(firstDetailButton);

      expect(consoleSpy).toHaveBeenCalledWith(
        "Ver detalles de:",
        clinicalHistoryData[0]
      );
    });

    it("should be expandable when data is present", async () => {
      render(<ClinicalHistory data={clinicalHistoryData} />);

      // The expandable button should have cursor-pointer class
      const expandButton = screen.getByTestId("widget-expand-button");
      expect(expandButton).toHaveClass("cursor-pointer");
    });

    it("should display item details correctly", () => {
      render(<ClinicalHistory data={clinicalHistoryData} />);

      const firstItem = clinicalHistoryData[0];
      expect(screen.getByText(firstItem.description)).toBeInTheDocument();
      // Check formatted date parts
      const { month, year } = formatDate(firstItem.date);
      expect(screen.getByText(month || "")).toBeInTheDocument();
      expect(screen.getByText(year || "")).toBeInTheDocument();
    });
  });
});
