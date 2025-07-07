import React from "react";
import type { WidgetProps } from "../types";

const Widget: React.FC<WidgetProps> = ({
  title,
  color,
  icon,
  children,
  isExpanded = true,
  onToggle,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
      {/* Header */}
      <div
        className={`px-4 py-3 flex items-center justify-between cursor-pointer ${color}`}
        onClick={onToggle}
      >
        <div className="flex items-center space-x-2">
          <span className="text-white font-medium">{icon}</span>
          <h3 className="text-white font-semibold text-sm">{title}</h3>
        </div>
        {onToggle && (
          <button className="text-white hover:text-gray-200 transition-colors">
            {isExpanded ? "−" : "+"}
          </button>
        )}
      </div>

      {/* Content */}
      {isExpanded && <div className="p-4">{children}</div>}
    </div>
  );
};

export default Widget;
