import React, { useState } from "react";
import Widget from "@/components/Widget";
import WidgetItem from "@/components/ui/WidgetItem";
import type { PlanItem } from "@/types";
import { IconName } from "@/assets/icons";

interface PlanProps {
  data: PlanItem[];
  onViewDetails?: (item: PlanItem) => void;
}

const Plan: React.FC<PlanProps> = ({ data, onViewDetails }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleViewDetails = (item: PlanItem) => {
    console.log("Ver detalles de:", item);
    onViewDetails?.(item);
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
          <WidgetItem
            key={item.id}
            title={`${item.name} ${item.dose}`}
            subtitle={item.posology}
            icon={item.icon as IconName}
            iconColor={item.iconColor}
            details={item.details}
            onViewDetails={() => handleViewDetails(item)}
          />
        ))}
      </div>
    </Widget>
  );
};

export default Plan;
