import React from "react";
import type { TabContentProps, HealthDataTab } from "../types";
import {
  actionsAll,
  actionsIcd10Diagnosis,
  clinicalFindingsActions,
} from "../data/mockData";

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  const renderActionButtons = (
    actions: Array<{ label: string; icon: string; iconColor: string }>
  ) => (
    <div className="grid grid-cols-2 gap-3">
      {actions.map((action, index) => (
        <button
          key={index}
          className="flex items-center p-3 bg-gray-50 hover:bg-gray-200 rounded-lg text-gray-700 
          font-medium text-sm transition-colors border border-gray-200 cursor-pointer"
        >
          <span className="mr-2">{action.icon}</span>
          <span className="text-sm text-left">{action.label}</span>
        </button>
      ))}
    </div>
  );

  const renderTodosContent = () => renderActionButtons(actionsAll);

  const renderDiagnosticoContent = () =>
    renderActionButtons(actionsIcd10Diagnosis);

  const renderHallazgosContent = () =>
    renderActionButtons(clinicalFindingsActions);

  switch (activeTab as HealthDataTab) {
    case "TODOS":
      return renderTodosContent();
    case "DIAGNÓSTICO CIE-10":
      return renderDiagnosticoContent();
    case "HALLAZGOS CLÍNICOS":
      return renderHallazgosContent();
    default:
      return renderTodosContent();
  }
};

export default TabContent;
