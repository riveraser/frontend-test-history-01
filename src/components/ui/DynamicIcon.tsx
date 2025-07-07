import React from "react";
import { icons, type IconName } from "@/assets/icons";

interface DynamicIconProps {
  name: IconName;
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: string;
}

/**
 * DynamicIcon component
 *
 * This component is used to display an icon dynamically based on the name provided.
 * It uses the icons map from the assets/icons/ folder to display the correct svg icon.
 *
 * @param name - The name of the icon to display
 * @param className - Additional CSS classes to apply to the icon
 * @param size - The size of the icon
 * @param color - The color of the icon
 * @returns The DynamicIcon component
 */
const DynamicIcon: React.FC<DynamicIconProps> = ({
  name,
  className = "",
  size = "md",
  color,
}) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  // Check if the sizes matches the proposed design
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const finalClasses = `${sizeClasses[size]} ${className}`;

  return (
    <IconComponent
      className={finalClasses}
      style={color ? { color } : undefined}
    />
  );
};

export default DynamicIcon;
