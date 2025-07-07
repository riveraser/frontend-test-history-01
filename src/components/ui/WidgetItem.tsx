import React from "react";
import EyeButton from "./EyeButton";
import DateDisplay from "./DateDisplay";
import DynamicIcon from "./DynamicIcon";
import type { IconName } from "@/assets/icons";

interface WidgetItemProps {
  title: string;
  subtitle?: string;
  date?: string;
  icon?: IconName;
  iconColor?: string;
  details?: string;
  onViewDetails?: () => void;
  className?: string;
  subtitleClassName?: string;
  hasAlert?: boolean;
}

const WidgetItem: React.FC<WidgetItemProps> = ({
  title,
  subtitle,
  date,
  icon,
  iconColor,
  details,
  onViewDetails,
  className = "",
  subtitleClassName = "",
  hasAlert = false,
}) => {
  const hasDetails = details && onViewDetails;

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
          {subtitle && <div className={`${subtitleClassName}`}>{subtitle}</div>}
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
            onClick={onViewDetails}
            size="lg"
            title={`Ver detalles de: ${title}`}
            className="!h-full"
          />
        </div>
      )}
    </div>
  );
};

export default WidgetItem;
