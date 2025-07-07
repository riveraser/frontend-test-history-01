import React from "react";
import type { TabContentProps, HealthDataTab, AccionItem } from "@/types";
import DynamicIcon from "./ui/DynamicIcon";
import type { IconName } from "@/assets/icons";
import {
  actionsAll,
  actionsIcd10Diagnosis,
  clinicalFindingsActions,
} from "@/data/mockData";

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  const renderActionButtons = (actions: AccionItem[]) => (
    <div className="grid grid-cols-2 gap-3">
      {actions.map((action, index) => (
        <button
          onClick={() => handleActionClick(action.id)}
          key={index}
          className="bg-(--health-button-bg) text-(--health-button-text) p-4 rounded-lg font-medium text-sm transition-colors hover:bg-gray-200 cursor-pointer "
        >
          <div className="relative flex items-center justify-between leading-3.5 ">
            <span className="text-center flex-1">{action.label}</span>
            <div className="relative  bg-(--health-icon-bg) rounded-sm top-[-10px] right-[-10px] p-1">
              <DynamicIcon
                name={action.icon as IconName}
                size="md"
                className={action.iconColor}
              />
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

function handleActionClick(id: number): void {
  const action = actionsAll.find((action) => action.id === id);
  console.log(`id: ${id} clicked: ${action?.label}`);
}
