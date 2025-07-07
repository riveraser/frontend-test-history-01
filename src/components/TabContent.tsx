import React from "react";
import type { TabContentProps, HealthDataTab } from "../types";

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  const renderTodosContent = () => (
    <div className="grid grid-cols-2 gap-3">
      <button className="p-3 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-700 font-medium text-sm transition-colors">
        ❤️ Signos vitales
      </button>
      <button className="p-3 bg-green-50 hover:bg-green-100 rounded-lg text-green-700 font-medium text-sm transition-colors">
        🧪 Dato de laboratorio
      </button>
      <button className="p-3 bg-purple-50 hover:bg-purple-100 rounded-lg text-purple-700 font-medium text-sm transition-colors">
        👁️ Talla y/o peso
      </button>
      <button className="p-3 bg-orange-50 hover:bg-orange-100 rounded-lg text-orange-700 font-medium text-sm transition-colors">
        ✏️ Cirugía
      </button>
      <button className="p-3 bg-red-50 hover:bg-red-100 rounded-lg text-red-700 font-medium text-sm transition-colors">
        ⚠️ Escala / Clasificación
      </button>
      <button className="p-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg text-indigo-700 font-medium text-sm transition-colors">
        🧮 Calculadora clínica
      </button>
    </div>
  );

  const renderDiagnosticoContent = () => (
    <div className="text-center py-8">
      <p className="text-gray-500 text-sm">Contenido para DIAGNÓSTICO CIE-10</p>
      <p className="text-gray-400 text-xs mt-2">
        Aquí se mostrarían las opciones de diagnóstico
      </p>
    </div>
  );

  const renderHallazgosContent = () => (
    <div className="text-center py-8">
      <p className="text-gray-500 text-sm">Contenido para HALLAZGOS CLÍNICOS</p>
      <p className="text-gray-400 text-xs mt-2">
        Aquí se mostrarían los hallazgos clínicos
      </p>
    </div>
  );

  switch (activeTab as HealthDataTab) {
    case "TODOS":
      return renderTodosContent();
    case "DIAGNÓSTICO CIE-10":
      return renderDiagnosticoContent();
    case "HALLAZGOS CLÍNICOS":
      return renderHallazgosContent();
    default:
      return renderTodosContent();
  }
};

export default TabContent;
