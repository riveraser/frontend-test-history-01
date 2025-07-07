import React, { useState } from "react";
import Widget from "@/components/Widget";
import type { PlanItem } from "@/types";
import EyeButton from "@components/ui/EyeButton";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { IconName } from "@/assets/icons";
interface PlanProps {
  data: PlanItem[];
}

const Plan: React.FC<PlanProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleViewDetails = (item: PlanItem) => {
    console.log("Ver detalles de:", item);
    // TODO: Implement the logic to view the details
  };

  if (data.length === 0) {
    return (
      <Widget
        title="Plan"
        color="bg-(--plan-header-bg) text-(--plan-header-text)"
        isExpanded={isExpanded}
        onToggle={handleToggle}
      >
        <div className="text-center py-4">
          <p className="text-gray-500 text-sm">No hay datos para mostrar</p>
        </div>
      </Widget>
    );
  }

  return (
    <Widget
      title="Plan"
      color="bg-(--plan-header-bg) text-(--plan-header-text)"
      isExpanded={isExpanded}
      onToggle={handleToggle}
      isExpandable={true}
      collapseColor="text-(--plan-header-bg)"
    >
      <div className="space-y-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="widget-item-glow flex items-stretch p-2 bg-gray-50 rounded-sm "
          >
            <div className="flex items-center justify-center">
              <DynamicIcon
                name={item.icon as IconName}
                size="lg"
                className={`${item.iconColor} w-10 h-10`}
              />
            </div>
            <div className="flex items-center justify-center flex-1 px-4">
              <div className="text-(--widget-text) text-md font-bold text-left">
                {`${item.name}  ${item.dose}`} <br />
                {item.posology}
              </div>
            </div>
            {item.details && (
              <div className="flex items-center justify-center">
                <EyeButton
                  onClick={() => handleViewDetails(item)}
                  size="lg"
                  title={`Ver detalles de: ${item.name}  ${item.dose}`}
                  className="!h-full"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </Widget>
  );
};

export default Plan;
