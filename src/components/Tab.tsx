import React from "react";
import type { TabProps } from "../types";

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors duration-300 ${
        isActive
          ? "bg-blue-600 text-white"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer"
      }`}
    >
      {label}
    </button>
  );
};

export default Tab;
