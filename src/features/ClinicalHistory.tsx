import React, { useState } from "react";
import Widget from "../components/Widget";
import type { ClinicalHistoryItem } from "../types";

interface ClinicalHistoryProps {
  data: ClinicalHistoryItem[];
}

const ClinicalHistory: React.FC<ClinicalHistoryProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  if (data.length === 0) {
    return (
      <Widget
        title="Historial clínico"
        color="bg-green-600"
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
      color="bg-green-600"
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
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <span className="text-gray-500 text-xs">{item.date}</span>
                <span className="text-gray-700 text-sm">
                  {item.description}
                </span>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              👁️
            </button>
          </div>
        ))}
      </div>
    </Widget>
  );
};

export default ClinicalHistory;
