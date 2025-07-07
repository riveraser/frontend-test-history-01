// Even if this project is in Spanish, I'm using English for the mock data
// because of standardization.
// Even my comments will be in English for the same reason.

import type {
  ClinicalHistoryItem,
  TreatmentItem,
  PlanItem,
  ParaclinicalItem,
  AccionItem,
} from "../types";

// Mock data for the "Historial clinico" section
export const clinicalHistoryData: ClinicalHistoryItem[] = [
  {
    id: "1",
    date: "15/03/2024",
    description: "Paciente presenta dolor abdominal agudo",
    details:
      "El dolor se localiza en el cuadrante inferior derecho, acompañado de náuseas leves. Se recomienda evaluación quirúrgica.",
  },
  {
    id: "2",
    date: "10/03/2024",
    description: "Control de presión arterial elevada",
    details:
      "Lectura de 145/95 mmHg. Se mantiene tratamiento actual con seguimiento mensual.",
  },
  {
    id: "3",
    date: "05/03/2024",
    description: "Revisión de diabetes tipo 2",
    details:
      "Glicemia en ayunas estable. Se reitera importancia del control dietético y actividad física.",
  },
];

// Mock data for the "Tratamiento actual" section
export const currentTreatmentData: TreatmentItem[] = [
  {
    id: "1",
    name: "Metformina",
    dose: "500mg",
    posology: "1 tableta cada 8 horas",
  },
  {
    id: "2",
    name: "Losartán",
    dose: "50mg",
    posology: "1 tableta cada 12 horas",
  },
];

// Mock data for the "Plan" section
export const planData: PlanItem[] = [
  {
    id: "1",
    name: "Aspirina",
    dose: "100mg",
    posology: "1 tableta diaria",
  },
  {
    id: "2",
    name: "Vitamina D",
    dose: "1000 UI",
    posology: "1 cápsula diaria",
  },
];

// Mock data for the "Paraclinicos" section
export const paraclinicalData: ParaclinicalItem[] = [
  {
    id: "1",
    name: "Hemograma completo",
    result: "8.5 g/dL",
    hasAlert: false,
  },
  {
    id: "2",
    name: "Glucosa en ayunas",
    result: "130 mg/dL",
    hasAlert: true,
  },
  {
    id: "3",
    name: "Colesterol Total",
    result: "180 mg/dL",
    hasAlert: false,
  },
];

// Mock data for "Agregar dato de salud" actions

// Todas
export const actionsAll: AccionItem[] = [
  { label: "Signos vitales", icon: "❤️", iconColor: "text-red-500" },
  { label: "Dato de laboratorio", icon: "🧪", iconColor: "text-purple-500" },
  { label: "Talla y/o peso", icon: "👁️", iconColor: "text-green-500" },
  { label: "Cirugía", icon: "✏️", iconColor: "text-blue-500" },
  { label: "Escala / Clasificación", icon: "⚠️", iconColor: "text-orange-500" },
  { label: "Calculadora clínica", icon: "🔢", iconColor: "text-gray-500" },
];

// Diagnóstico CIE-10
export const actionsIcd10Diagnosis: AccionItem[] = [
  { label: "Búsqueda CIE-10", icon: "👁️", iconColor: "text-blue-500" },
  { label: "Diagnósticos frecuentes", icon: "❤️", iconColor: "text-green-500" },
  { label: "Historial diagnósticos", icon: "⚠️", iconColor: "text-orange-500" },
];

// Hallazgos clínicos
export const clinicalFindingsActions: AccionItem[] = [
  { label: "Exploración física", icon: "👁️", iconColor: "text-blue-500" },
  { label: "Signos vitales", icon: "❤️", iconColor: "text-red-500" },
  { label: "Hallazgos relevantes", icon: "⚠️", iconColor: "text-yellow-500" },
];
