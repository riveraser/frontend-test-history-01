export interface ClinicalHistoryItem {
  id: string;
  date: string;
  description: string;
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

export interface WidgetProps {
  title: string;
  color: string;
  icon: string;
  children: React.ReactNode;
  isExpanded?: boolean;
  onToggle?: () => void;
}

export interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export interface TabContentProps {
  activeTab: string;
}
