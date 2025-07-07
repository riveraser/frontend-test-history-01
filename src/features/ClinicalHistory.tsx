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
        color="bg-blue-900"
        icon="📋"
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
      title="Historial clínico"
      color="bg-blue-900"
      icon="📋"
      isExpanded={isExpanded}
      onToggle={handleToggle}
    >
      <div className="space-y-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <DateDisplay date={item.date} />
              <span className="text-gray-700 text-sm">{item.description}</span>
            </div>
            {item.details && (
              <EyeButton
                onClick={() => handleViewDetails(item)}
                size="md"
                title={`Ver detalles de: ${item.description}`}
              />
            )}
          </div>
        ))}
      </div>
    </Widget>
  );
};

export default ClinicalHistory;
