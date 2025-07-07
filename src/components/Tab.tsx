import React from "react";
import type { TabProps } from "../types";

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
        isActive
          ? "bg-(--health-tab-active-bg) text-(--health-tab-active-text)"
          : "bg-(--health-tab-inactive-bg) text-(--health-tab-inactive-text) hover:text-(--health-tab-active-text) cursor-pointer"
      }`}
    >
      {label}
    </button>
  );
};

export default Tab;
