import React from "react";
import EyeIcon from "@assets/icons/eye.svg?react";

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
    "text-gray-400 hover:text-gray-600 transition-colors cursor-pointer";
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
