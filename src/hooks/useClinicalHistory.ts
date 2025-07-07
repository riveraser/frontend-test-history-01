import { useQuery } from "@tanstack/react-query";
import type { ClinicalHistoryItem } from "@/types";

async function fetchClinicalHistory(): Promise<ClinicalHistoryItem[]> {
  const response = await fetch("/mock/clinicalHistoryData.json");
  if (!response.ok) {
    throw new Error("Failed to fetch clinical history data");
  }
  return response.json();
}

export function useClinicalHistory() {
  return useQuery({
    queryKey: ["clinicalHistory"],
    queryFn: fetchClinicalHistory,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
