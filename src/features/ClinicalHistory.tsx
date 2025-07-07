import React, { useState } from "react";
import Widget from "@components/Widget";
import EyeButton from "@components/ui/EyeButton";
import DateDisplay from "@components/ui/DateDisplay";
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
          <div
            key={item.id}
            className="widget-item-glow flex items-stretch p-2 bg-gray-50 rounded-sm"
          >
            <div className="flex items-center justify-center">
              <DateDisplay date={item.date} />
            </div>
            <div className="flex items-center justify-center flex-1 px-4">
              <div className="text-(--widget-text) text-md font-bold text-left">
                {item.description}
              </div>
            </div>
            {item.details && (
              <div className="flex items-center justify-center">
                <EyeButton
                  onClick={() => handleViewDetails(item)}
                  size="lg"
                  title={`Ver detalles de: ${item.description}`}
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

export default ClinicalHistory;
