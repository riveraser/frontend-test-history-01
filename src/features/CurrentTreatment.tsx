import React, { useState } from "react";
import Widget from "@/components/Widget";
import WidgetItem from "@/components/ui/WidgetItem";
import type { TreatmentItem } from "@/types";
import { IconName } from "@/assets/icons";

interface CurrentTreatmentProps {
  data: TreatmentItem[];
}

const CurrentTreatment: React.FC<CurrentTreatmentProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  if (data.length === 0) {
    return (
      <Widget
        title="Tratamiento actual"
        color="bg-(--treatment-header-bg) text-(--treatment-header-text)"
        isExpanded={isExpanded}
        onToggle={handleToggle}
        collapseColor="text-(--treatment-header-bg)"
      >
        <div className="text-center py-4">
          <p className="text-gray-500 text-sm">No hay datos para mostrar</p>
        </div>
      </Widget>
    );
  }

  return (
    <Widget
      title="Tratamiento actual"
      color="bg-(--treatment-header-bg) text-(--treatment-header-text)"
      isExpanded={isExpanded}
      onToggle={handleToggle}
      isExpandable={true}
      collapseColor="text-(--treatment-header-bg)"
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
          />
        ))}
      </div>
    </Widget>
  );
};

export default CurrentTreatment;
