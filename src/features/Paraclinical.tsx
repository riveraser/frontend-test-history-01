import React, { useState } from "react";
import Widget from "@/components/Widget";
import WidgetItem from "@/components/ui/WidgetItem";
import type { ParaclinicalItem } from "@/types";
import { IconName } from "@/assets/icons";

interface ParaclinicalProps {
  data: ParaclinicalItem[];
}

const Paraclinical: React.FC<ParaclinicalProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleViewDetails = (item: ParaclinicalItem) => {
    console.log("Ver detalles de:", item);
    // TODO: Implement the logic to view the details
  };

  if (data.length === 0) {
    return (
      <Widget
        title="Paraclínicos"
        color="bg-(--paraclinical-header-bg) text-(--paraclinical-header-text)"
        isExpanded={isExpanded}
        onToggle={handleToggle}
        collapseColor="text-(--paraclinical-header-bg)"
      >
        <div className="text-center py-4">
          <p className="text-gray-500 text-sm">No hay datos para mostrar</p>
        </div>
      </Widget>
    );
  }

  return (
    <Widget
      title="Paraclínicos"
      color="bg-(--paraclinical-header-bg) text-(--paraclinical-header-text)"
      isExpanded={isExpanded}
      onToggle={handleToggle}
      collapseColor="text-(--paraclinical-header-bg)"
    >
      <div className="space-y-3">
        {data.map((item) => (
          <WidgetItem
            key={item.id}
            title={item.name}
            subtitle={item.result}
            subtitleClassName="text-(--widget-text-highlight)"
            details={item.details}
            icon={item.icon as IconName}
            iconColor={item.iconColor}
            hasAlert={item.hasAlert}
            onViewDetails={() => handleViewDetails(item)}
          />
        ))}
      </div>
    </Widget>
  );
};

export default Paraclinical;
