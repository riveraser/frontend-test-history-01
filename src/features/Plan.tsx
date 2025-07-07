import React, { useState } from "react";
import Widget from "@/components/Widget";
import type { PlanItem } from "@/types";

interface PlanProps {
  data: PlanItem[];
}

const Plan: React.FC<PlanProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  if (data.length === 0) {
    return (
      <Widget
        title="Plan"
        color="bg-blue-800"
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
      title="Plan"
      color="bg-blue-800"
      icon="📋"
      isExpanded={isExpanded}
      onToggle={handleToggle}
      isExpandable={true}
    >
      <div className="space-y-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <span className="text-blue-800 font-medium">Rx</span>
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

export default Plan;
