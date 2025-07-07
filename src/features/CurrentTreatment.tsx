import React, { useState } from "react";
import Widget from "../components/Widget";
import type { TreatmentItem } from "../types";

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
        color="bg-green-600"
        icon="💊"
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
      title="Tratamiento actual"
      color="bg-green-600"
      icon="💊"
      isExpanded={isExpanded}
      onToggle={handleToggle}
    >
      <div className="space-y-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <span className="text-green-600 font-medium">Rx</span>
              <div className="flex-1">
                <div className="font-medium text-gray-800 text-sm">
                  {item.name}
                </div>
                <div className="text-gray-600 text-xs">
                  {item.dose} - {item.posology}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Widget>
  );
};

export default CurrentTreatment;
