import { useQuery } from "@tanstack/react-query";
import type { PlanItem } from "@/types";

async function fetchPlan(): Promise<PlanItem[]> {
  const response = await fetch("/mock/planData.json");
  if (!response.ok) {
    throw new Error("Failed to fetch plan data");
  }
  return response.json();
}

export function usePlan() {
  return useQuery({
    queryKey: ["plan"],
    queryFn: fetchPlan,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
