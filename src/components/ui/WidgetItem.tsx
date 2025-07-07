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
}) => {
  return (
    <div
      className={`widget-item-glow flex items-stretch p-2 bg-gray-50 rounded-sm ${className}`}
    >
      {/* Primera columna: DateDisplay o Icon */}
      <div className="flex items-center justify-center">
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
      <div className="flex items-center justify-center flex-1 px-4">
        <div className="text-(--widget-text) text-md font-bold text-left">
          {title}
          {subtitle && (
            <>
              <br />
              {subtitle}
            </>
          )}
        </div>
      </div>

      {/* Tercera columna: EyeButton (solo si hay details) */}
      {details && onViewDetails && (
        <div className="flex items-center justify-center">
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
