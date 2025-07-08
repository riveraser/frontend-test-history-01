import React from "react";
import Widget from "@/components/Widget";
import Tab from "@/components/Tab";
import TabContent from "@/components/TabContent";
import type { HealthDataTab } from "@/types";
import { useUIStore } from "@/lib/store";

const AddHealthData: React.FC = () => {
  const { healthDataTab, setHealthDataTab } = useUIStore();

  const tabs: HealthDataTab[] = [
    "TODOS",
    "DIAGNOSIS CIE-10",
    "HALLAZGOS CLÍNICOS",
  ];

  return (
    <Widget
      title="Agregar dato de salud"
      color="bg-(--health-header-bg) text-(--health-header-text)"
      isExpandable={false}
    >
      {/* Tab Navigation */}
      <div className="bg-(--health-tabs-bg) p-1 rounded-lg mb-4">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <Tab
              key={tab}
              label={tab}
              isActive={healthDataTab === tab}
              onClick={() => setHealthDataTab(tab)}
            />
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <TabContent activeTab={healthDataTab} />
    </Widget>
  );
};

export default AddHealthData;
