import React, { useState } from "react";
import Widget from "@/components/Widget";
import WidgetItem from "@/components/ui/WidgetItem";
import type { TreatmentItem } from "@/types";

interface CurrentTreatmentProps {
  data: TreatmentItem[];
}

const CurrentTreatment: React.FC<CurrentTreatmentProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleViewDetails = (item: TreatmentItem) => {
    console.log("Ver detalles de:", item);
    // TODO: Implement the logic to view the details
  };

  if (data.length === 0) {
    return (
      <Widget
        title="Tratamiento actual"
        color="bg-green-600"
        icon="💊"
        isExpanded={isExpanded}
        onToggle={handleToggle}
        isExpandable={true}
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
      isExpandable={true}
    >
      <div className="space-y-3">
        {data.map((item) => (
          <WidgetItem
            key={item.id}
            title={`${item.name} ${item.dose}`}
            subtitle={item.posology}
            icon="rxCode"
            iconColor="text-green-600"
            onViewDetails={() => handleViewDetails(item)}
          />
        ))}
      </div>
    </Widget>
  );
};

export default CurrentTreatment;
