import React from "react";
import { formatDate } from "@/utils";

interface DateDisplayProps {
  date: string; // format: "15/03/2024" this could be a data object too... but for now is a string
  className?: string;
}

const DateDisplay: React.FC<DateDisplayProps> = ({ date, className = "" }) => {
  const { month, year } = formatDate(date);

  return (
    <div
      className={`flex flex-col items-center justify-center min-w-[3rem] leading-7 ${className}`}
    >
      <span className="text-lg text-(--widget-text-highlight) font-bold lowercase leading-2">
        {month}
      </span>
      <span className="text-2xl font-bold text-(--widget-text-highlight)">
        {year}
      </span>
    </div>
  );
};

export default DateDisplay;
