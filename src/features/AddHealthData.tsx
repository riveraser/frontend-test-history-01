import React, { useState } from "react";
import Widget from "../components/Widget";
import Tab from "../components/Tab";
import TabContent from "../components/TabContent";
import type { HealthDataTab } from "../types";

const AddHealthData: React.FC = () => {
  const [activeTab, setActiveTab] = useState<HealthDataTab>("TODOS");

  const tabs: HealthDataTab[] = [
    "TODOS",
    "DIAGNÓSTICO CIE-10",
    "HALLAZGOS CLÍNICOS",
  ];

  return (
    <Widget title="Agregar dato de salud" color="bg-blue-600" icon="➕">
      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-4">
        {tabs.map((tab) => (
          <Tab
            key={tab}
            label={tab}
            isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>

      {/* Tab Content */}
      <TabContent activeTab={activeTab} />
    </Widget>
  );
};

export default AddHealthData;
