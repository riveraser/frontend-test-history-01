import React, { useState } from "react";
import Widget from "@/components/Widget";
import WidgetItem from "@/components/ui/WidgetItem";
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
      title="Paraclínicos"
      color="bg-orange-600"
      icon="🔬"
      isExpanded={isExpanded}
      onToggle={handleToggle}
      isExpandable={true}
    >
      <div className="space-y-3">
        {data.map((item) => (
          <WidgetItem
            key={item.id}
            title={item.name}
            subtitle={item.result}
            icon="testTube"
            iconColor="text-orange-600"
            onViewDetails={() => handleViewDetails(item)}
          />
        ))}
      </div>
    </Widget>
  );
};

export default Paraclinical;
