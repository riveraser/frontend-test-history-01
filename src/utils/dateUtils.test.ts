import { describe, it, expect } from "vitest";
import { formatDate } from "./dateUtils";

describe("formatDate", () => {
  it("should return correct month abbreviation and year for valid dates", () => {
    expect(formatDate("15/01/2024")).toEqual({ month: "ene", year: "2024" });
    expect(formatDate("01/02/2023")).toEqual({ month: "feb", year: "2023" });
    expect(formatDate("10/03/2022")).toEqual({ month: "mar", year: "2022" });
    expect(formatDate("05/04/2021")).toEqual({ month: "abr", year: "2021" });
    expect(formatDate("12/05/2020")).toEqual({ month: "may", year: "2020" });
    expect(formatDate("30/06/2019")).toEqual({ month: "jun", year: "2019" });
    expect(formatDate("07/07/2018")).toEqual({ month: "jul", year: "2018" });
    expect(formatDate("21/08/2017")).toEqual({ month: "ago", year: "2017" });
    expect(formatDate("09/09/2016")).toEqual({ month: "sept", year: "2016" });
    expect(formatDate("11/10/2015")).toEqual({ month: "oct", year: "2015" });
    expect(formatDate("22/11/2014")).toEqual({ month: "nov", year: "2014" });
    expect(formatDate("31/12/2013")).toEqual({ month: "dic", year: "2013" });
  });

  it("should return the month number if not in the map", () => {
    expect(formatDate("01/13/2024")).toEqual({ month: "13", year: "2024" });
    expect(formatDate("01/00/2024")).toEqual({ month: "00", year: "2024" });
  });

  it("should handle malformed date strings gracefully", () => {
    expect(formatDate("2024-01-15")).toEqual({
      month: undefined,
      year: undefined,
    });
    expect(formatDate("")).toEqual({ month: undefined, year: undefined });
    expect(formatDate("/")).toEqual({ month: undefined, year: undefined });
    expect(formatDate("15/03")).toEqual({ month: undefined, year: undefined });
  });
});
