import { useQuery } from "@tanstack/react-query";
import type { ParaclinicalItem } from "@/types";

async function fetchParaclinical(): Promise<ParaclinicalItem[]> {
  const response = await fetch("/mock/paraclinicalData.json");
  if (!response.ok) {
    throw new Error("Failed to fetch paraclinical data");
  }
  return response.json();
}

export function useParaclinical() {
  return useQuery({
    queryKey: ["paraclinical"],
    queryFn: fetchParaclinical,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
