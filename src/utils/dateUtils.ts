/**
 * Date utilities for formatting and manipulating dates
 */

// Map of month numbers to Spanish month names
const monthNames: Record<string, string> = {
  "01": "ene",
  "02": "feb",
  "03": "mar",
  "04": "abr",
  "05": "may",
  "06": "jun",
  "07": "jul",
  "08": "ago",
  "09": "sept",
  "10": "oct",
  "11": "nov",
  "12": "dic",
};

/**
 * Formats a date string in DD/MM/YYYY format to an object with month and year
 * @param dateString - Date string in DD/MM/YYYY format
 * @returns Object with month (abbreviated in Spanish) and year
 */
export const formatDate = (dateString: string) => {
  const parts = dateString.split("/");

  // This check was added to avoid errors when the date is not in the format DD/MM/YYYY
  // thanks to unit test I found this bug
  if (parts.length < 3) {
    return { month: undefined, year: undefined };
  }
  const [, month, year] = parts;
  return {
    month: monthNames[month] || month,
    year: year,
  };
};
