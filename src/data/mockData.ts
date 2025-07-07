// Even if this project is in Spanish, I'm using English for the mock data
// because of standardization.
// Even my comments will be in English for the same reason.

import type {
  ClinicalHistoryItem,
  TreatmentItem,
  PlanItem,
  ParaclinicalItem,
  AccionItem,
} from "@/types";

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
    // Without details to test the eye button
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
    posology: "1 tableta diaria",
  },
  {
    id: "3",
    name: "Atorvastatina",
    dose: "20mg",
    posology: "1 tableta diaria",
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

// Mock data for the "Paraclínicos" section
export const paraclinicalData: ParaclinicalItem[] = [
  {
    id: "1",
    name: "Hemograma completo",
    result: "Normal",
  },
  {
    id: "2",
    name: "Glicemia en ayunas",
    result: "Elevada - 145 mg/dL",
    hasAlert: true,
  },
  {
    id: "3",
    name: "Perfil lipídico",
    result: "Normal",
  },
];

// Mock data for the "Agregar dato de salud" actions
export const actionsAll: AccionItem[] = [
  {
    id: 1,
    label: "Signos vitales",
    icon: "heart",
    iconColor: "text-[#ED1F20]",
  },
  {
    id: 2,
    label: "Talla y/o peso",
    icon: "mkgCode",
    iconColor: "text-[#48A600]",
  },
  {
    id: 3,
    label: "Dato de laboratorio",
    icon: "testTube",
    iconColor: "text-[#AD3AFF]",
  },

  { id: 4, label: "Cirugía", icon: "scalpel", iconColor: "text-[#348DFF]" },
  {
    id: 5,
    label: "Escala / Clasificación",
    icon: "network",
    iconColor: "text-[#F07905]",
  },
  {
    id: 6,
    label: "Calculadora clínica",
    icon: "calculator",
    iconColor: "text-[#6C6C6C]",
  },
];

export const actionsIcd10Diagnosis: AccionItem[] = [
  {
    id: 7,
    label: "CIE-10 Diagnóstico",
    icon: "rxCode",
    iconColor: "text-blue-600",
  },
  {
    id: 8,
    label: "CIE-10 Procedimiento",
    icon: "cxCode",
    iconColor: "text-green-600",
  },
  {
    id: 9,
    label: "CIE-10 MKG",
    icon: "mkgCode",
    iconColor: "text-purple-600",
  },
];

export const clinicalFindingsActions: AccionItem[] = [
  {
    id: 10,
    label: "Hallazgos físicos",
    icon: "expandView",
    iconColor: "text-blue-500",
  },
  { id: 11, label: "Síntomas", icon: "heart", iconColor: "text-red-500" },
  { id: 12, label: "Signos", icon: "testTube", iconColor: "text-orange-500" },
];
