export interface ClinicalHistoryItem {
  id: string;
  date: string;
  description: string;
  details: string;
}

export interface TreatmentItem {
  id: string;
  name: string;
  dose: string;
  posology: string;
}

export interface PlanItem {
  id: string;
  name: string;
  dose: string;
  posology: string;
}

export interface ParaclinicalItem {
  id: string;
  name: string;
  result: string;
  hasAlert?: boolean;
}

export interface AccionItem {
  label: string;
  icon: string;
  iconColor: string;
}
