import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddHealthData from "./AddHealthData";
import {
  actionsAll,
  actionsIcd10Diagnosis,
  clinicalFindingsActions,
} from "@/data/mockData"; // Lets reuse the mock data for the actions

describe("AddHealthData", () => {
  // The default render should show 3 tabs and "Todos" should be selected as default
  describe("Render", () => {
    it("should render the three tabs", () => {
      render(<AddHealthData />);
      expect(screen.getByText("TODOS")).toBeInTheDocument();
      expect(screen.getByText("DIAGNOSIS CIE-10")).toBeInTheDocument();
      expect(screen.getByText("HALLAZGOS CLÍNICOS")).toBeInTheDocument();
    });

    it("should show TODOS tab as active by default and display its actions", () => {
      render(<AddHealthData />);
      actionsAll.forEach((action) => {
        expect(screen.getByText(action.label)).toBeInTheDocument();
      });
    });
  });
  describe("Actions", () => {
    it("should change content when clicking on DIAGNOSIS CIE-10 tab", async () => {
      render(<AddHealthData />);
      await userEvent.click(screen.getByText("DIAGNOSIS CIE-10"));
      // Debe mostrar acciones de Diagnóstico CIE-10
      actionsIcd10Diagnosis.forEach((action) => {
        expect(screen.getByText(action.label)).toBeInTheDocument();
      });
    });

    it("should change content when clicking on HALLAZGOS CLÍNICOS tab", async () => {
      render(<AddHealthData />);
      await userEvent.click(screen.getByText("HALLAZGOS CLÍNICOS"));
      // Debe mostrar acciones de Hallazgos Clínicos
      clinicalFindingsActions.forEach((action) => {
        expect(screen.getByText(action.label)).toBeInTheDocument();
      });
    });
  });
});
