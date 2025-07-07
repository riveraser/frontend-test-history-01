import React from "react";

interface DateDisplayProps {
  date: string; // format: "15/03/2024" this could be a data object too... but for now is a string
  className?: string;
}

const DateDisplay: React.FC<DateDisplayProps> = ({ date, className = "" }) => {
  const formatDate = (dateString: string) => {
    const [, month, year] = dateString.split("/");
    // Here we are using a record to map the month number to the month name in spanish
    // we could use a library like date-fns to handle the date formatting
    // but for now is a simple record
    const monthNames: Record<string, string> = {
      "01": "ene",
      "02": "feb",
      "03": "mar",
      "04": "abr",
      "05": "may",
      "06": "jun",
      "07": "jul",
      "08": "ago",
      "09": "sep",
      "10": "oct",
      "11": "nov",
      "12": "dic",
    };

    return {
      month: monthNames[month] || month,
      year: year,
    };
  };

  const { month, year } = formatDate(date);

  return (
    <div
      className={`flex flex-col items-center justify-center min-w-[3rem] leading-7 ${className}`}
    >
      <span className="text-xs text-gray-500 font-medium uppercase leading-0">
        {month}
      </span>
      <span className="text-lg font-bold text-gray-800">{year}</span>
    </div>
  );
};

export default DateDisplay;
