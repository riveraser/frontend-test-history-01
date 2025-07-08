import React from "react";
import EyeButton from "./EyeButton";
import DateDisplay from "./DateDisplay";
import DynamicIcon from "./DynamicIcon";
import type { IconName } from "@/assets/icons";
import { useUIStore } from "@/lib/store";

interface WidgetItemProps {
  title: string;
  subtitle?: string;
  date?: string;
  icon?: IconName;
  iconColor?: string;
  details?: string;
  className?: string;
  subtitleClassName?: string;
  hasAlert?: boolean;
}

const WidgetItem: React.FC<WidgetItemProps> = React.memo(
  ({
    title,
    subtitle,
    date,
    icon,
    iconColor,
    details,
    className = "",
    subtitleClassName = "",
    hasAlert = false,
  }) => {
    // ✅ OPTIMIZATION: Only re-renders when showSnackbar changes
    const showSnackbar = useUIStore((state) => state.showSnackbar);
    const hasDetails = details;

    const handleViewDetails = () => {
      const message = `Ver detalles de: ${title}`;
      const type = hasAlert ? "warning" : "info";
      showSnackbar(message, type);
    };

    return (
      <div
        className={`widget-item-glow flex items-stretch p-2 bg-gray-50 rounded-sm ${className}`}
      >
        {/* Primera columna: DateDisplay o Icon */}
        <div className="flex items-center justify-center flex-shrink-0">
          {date ? (
            <DateDisplay date={date} />
          ) : icon ? (
            <DynamicIcon
              name={icon}
              size="lg"
              className={`${iconColor} w-10 h-10`}
            />
          ) : null}
        </div>

        {/* Segunda columna: Contenido principal */}
        <div className="flex items-center justify-center px-4 flex-1">
          <div className="text-(--widget-text) text-md font-bold text-left w-full leading-tight ">
            {title}
            {subtitle && (
              <div className={`${subtitleClassName}`}>{subtitle}</div>
            )}
          </div>
        </div>

        {/* Tercera columna: Alert */}
        {hasAlert && (
          <div className="flex items-center justify-center flex-shrink-0">
            <span className="text-(--widget-alert-text) bg-(--widget-alert-bg) font-bold !h-full w-9 rounded-sm p-2 text-center">
              !!
            </span>
          </div>
        )}

        {/* Cuarta columna: EyeButton (solo si hay details) */}
        {hasDetails && (
          <div className="flex items-center justify-center flex-shrink-0">
            <EyeButton
              onClick={handleViewDetails}
              size="lg"
              title={`Ver detalles de: ${title}`}
              className="!h-full"
            />
          </div>
        )}
      </div>
    );
  }
);

WidgetItem.displayName = "WidgetItem";

export default WidgetItem;
