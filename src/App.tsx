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
        {/* TODO: Replace this with a reusable component? */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Dashboard Clínico
          </h1>
          <p className="text-gray-600">
            Información del paciente y resumen clínico
          </p>
        </div>

        {/* Widgets Layout */}
        <div className="space-y-6">
          {/* First Row */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Widget 1: Agregar dato de salud */}
            <div className="flex-1">
              <AddHealthData />
            </div>

            {/* Widget 2: Historial clínico */}
            <div className="flex-1">
              <ClinicalHistory data={clinicalHistoryData} />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Widget 3: Tratamiento actual */}
            <div className="flex-1">
              <CurrentTreatment data={currentTreatmentData} />
            </div>

            {/* Widget 4: Plan */}
            <div className="flex-1">
              <Plan data={planData} />
            </div>
          </div>

          {/* Third Row - Full Width */}
          <div>
            {/* Widget 5: Paraclínicos */}
            <Paraclinical data={paraclinicalData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
