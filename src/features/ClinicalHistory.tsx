import React, { useState } from "react";
import Widget from "@components/Widget";
import WidgetItem from "@components/ui/WidgetItem";
import type { ClinicalHistoryItem } from "@/types";

interface ClinicalHistoryProps {
  data: ClinicalHistoryItem[];
}

const ClinicalHistory: React.FC<ClinicalHistoryProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleViewDetails = (item: ClinicalHistoryItem) => {
    console.log("Ver detalles de:", item);
    // TODO: Implement the logic to view the details
  };

  if (data.length === 0) {
    return (
      <Widget
        title="Historial clínico"
        color="bg-(--clinical-header-bg) text-(--clinical-header-text)"
        isExpanded={isExpanded}
        onToggle={handleToggle}
        isExpandable={true}
        collapseColor="text-(--clinical-header-bg)"
      >
        <div className="text-center py-4">
          <p className="text-gray-500 text-sm">No hay datos para mostrar</p>
        </div>
      </Widget>
    );
  }

  return (
    <Widget
      title="Historial clínico"
      color="bg-(--clinical-header-bg) text-(--clinical-header-text)"
      isExpanded={isExpanded}
      onToggle={handleToggle}
      isExpandable={true}
      collapseColor="text-(--clinical-header-bg)"
    >
      <div className="space-y-3">
        {data.map((item) => (
          <WidgetItem
            key={item.id}
            title={item.description}
            date={item.date}
            details={item.details}
            onViewDetails={() => handleViewDetails(item)}
          />
        ))}
      </div>
    </Widget>
  );
};

export default ClinicalHistory;
