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
        {/* Widgets Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Primera columna: Solo Agregar dato de salud */}
          <div className="w-full lg:w-1/3">
            <AddHealthData />
          </div>

          {/* Segunda columna: Los otros 4 widgets en 2x2 */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Widget 2: Historial clínico */}
              <div>
                <ClinicalHistory data={clinicalHistoryData} />
              </div>

              {/* Widget 3: Plan */}

              <div>
                <Plan data={planData} />
              </div>
              {/* Widget 4:  Tratamiento actual*/}
              <div>
                <CurrentTreatment data={currentTreatmentData} />
              </div>

              {/* Widget 5: Paraclínicos */}
              <div>
                <Paraclinical data={paraclinicalData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
