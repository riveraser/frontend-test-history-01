import React, { useState } from "react";
import Widget from "@/components/Widget";
import EyeButton from "@/components/ui/EyeButton";
import type { ParaclinicalItem } from "@/types";

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
    // Aquí puedes implementar la lógica para mostrar detalles
  };

  if (data.length === 0) {
    return (
      <Widget
        title="Paraclínicos"
        color="bg-orange-600"
        icon="🔬"
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
      title="Paraclínicos"
      color="bg-orange-600"
      icon="🔬"
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
              <span className="text-orange-600">🔬</span>
              <div className="flex-1">
                <div className="font-medium text-gray-800 text-sm">
                  {item.name}
                </div>
                <div className="text-gray-600 text-xs">{item.result}</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {item.hasAlert && (
                <span className="text-red-500 font-bold">!!</span>
              )}
              <EyeButton
                onClick={() => handleViewDetails(item)}
                size="sm"
                title={`Ver detalles de: ${item.name}`}
              />
            </div>
          </div>
        ))}
      </div>
    </Widget>
  );
};

export default Paraclinical;
