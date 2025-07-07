import React from "react";
import { EyeIcon } from "@assets/icons";

interface EyeButtonProps {
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  title?: string;
}

const EyeButton: React.FC<EyeButtonProps> = ({
  onClick,
  className = "",
  size = "md",
  disabled = false,
  title = "Ver detalles",
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const baseClasses =
    "bg-sky-700 hover:bg-sky-600 text-gray-300 hover:text-gray-50 transition-colors cursor-pointer rounded-full p-2";
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  const finalClasses = `${baseClasses} ${disabledClasses} ${className}`;

  return (
    <button
      onClick={onClick}
      className={finalClasses}
      disabled={disabled}
      title={title}
      type="button"
    >
      <EyeIcon className={sizeClasses[size]} />
    </button>
  );
};

export default EyeButton;
