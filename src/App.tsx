import React from "react";
import ClinicalHistory from "./features/ClinicalHistory";
import CurrentTreatment from "./features/CurrentTreatment";
import Plan from "./features/Plan";
import Paraclinical from "./features/Paraclinical";
import AddHealthData from "./features/AddHealthData";
import {
  clinicalHistoryData,
  currentTreatmentData,
  planData,
  paraclinicalData,
} from "./data/mockData";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Dashboard Clínico
          </h1>
          <p className="text-gray-600">
            Información del paciente y resumen clínico
          </p>
        </div>

        {/* Widgets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Widget 1: Agregar dato de salud */}
          <AddHealthData />

          {/* Widget 2: Historial clínico */}
          <ClinicalHistory data={clinicalHistoryData} />

          {/* Widget 3: Tratamiento actual */}
          <CurrentTreatment data={currentTreatmentData} />

          {/* Widget 4: Plan */}
          <Plan data={planData} />

          {/* Widget 5: Paraclínicos */}
          <div className="lg:col-span-2">
            <Paraclinical data={paraclinicalData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
