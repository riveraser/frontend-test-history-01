import { useQuery } from "@tanstack/react-query";
import type { TreatmentItem } from "@/types";

async function fetchCurrentTreatment(): Promise<TreatmentItem[]> {
  const response = await fetch("/mock/currentTreatmentData.json");
  if (!response.ok) {
    throw new Error("Failed to fetch current treatment data");
  }
  return response.json();
}

export function useCurrentTreatment() {
  return useQuery({
    queryKey: ["currentTreatment"],
    queryFn: fetchCurrentTreatment,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
