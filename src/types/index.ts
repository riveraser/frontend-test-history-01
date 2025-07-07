export interface ClinicalHistoryItem {
  id: string;
  date: string;
  description: string;
  details?: string;
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

// This will enforce the type of the tab
export type HealthDataTab =
  | "TODOS"
  | "DIAGNÓSTICO CIE-10"
  | "HALLAZGOS CLÍNICOS";

export interface WidgetProps {
  title: string;
  color: string;
  icon?: string;
  children: React.ReactNode;
  isExpanded?: boolean;
  onToggle?: () => void;
  style?: React.CSSProperties;
}

export interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export interface TabContentProps {
  activeTab: HealthDataTab; // We are passing the type of the tab
}
