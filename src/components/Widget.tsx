import React from "react";
import type { WidgetProps } from "@/types";
import { ExpandViewIcon, CollapseViewIcon } from "@/assets/icons";

const Widget: React.FC<WidgetProps> = ({
  title,
  color,
  children,
  isExpanded = true,
  onToggle,
  isExpandable = true,
  collapseColor,
}) => {
  return (
    <div>
      {/* Header */}
      <div
        className={`ml-2 mr-4 rounded-sm rounded-b-none px-4 py-3 flex items-center justify-between ${color}`}
      >
        <div className="flex items-center space-x-2">
          <h3 className="font-semibold text-xl">{title}</h3>
        </div>
        {onToggle && isExpandable && (
          <button
            onClick={isExpandable ? onToggle : undefined}
            className="hover:text-gray-200 transition-opacity bg-white rounded-sm py-1.5 px-4 cursor-pointer hover:opacity-90"
          >
            {isExpanded ? (
              <ExpandViewIcon className={`w-6 h-6 ${collapseColor}`} />
            ) : (
              <CollapseViewIcon className={`w-6 h-6 ${collapseColor}`} />
            )}
          </button>
        )}
      </div>

      {/* Adding smooth transition to the content when the widget is expanded or collapsed */}
      <div
        className={`widget-glow bg-white rounded-sm border border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Widget;
