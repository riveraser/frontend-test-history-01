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
          className="bg-(--health-button-bg) text-(--health-button-text) p-4 rounded-lg font-medium text-sm transition-colors hover:bg-gray-200 cursor-pointer"
        >
          <div className=" relative flex items-center justify-between">
            <span className="text-center flex-1 text-(--health-button-text) font-bold">
              {action.label}
            </span>
            <div className=" relative bg-(--health-icon-bg) rounded-sm top-[-15px] right-[-10px]">
              <span className="text-lg">{action.icon}</span>
            </div>
          </div>
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
    case "DIAGNOSIS CIE-10":
      return renderDiagnosticoContent();
    case "HALLAZGOS CLÍNICOS":
      return renderHallazgosContent();
    default:
      return renderTodosContent();
  }
};

export default TabContent;
