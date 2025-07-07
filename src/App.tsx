// TODO: Replace div templates with reusable components
import React, { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("TODOS");

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
          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <div className="bg-blue-600 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-white font-medium">➕</span>
                <h3 className="text-white font-semibold text-sm">
                  Agregar dato de salud
                </h3>
              </div>
            </div>
            <div className="p-4">
              {/* Tab Navigation */}
              <div className="flex space-x-1 mb-4">
                <button
                  onClick={() => setActiveTab("TODOS")}
                  className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                    activeTab === "TODOS"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  TODOS
                </button>
                <button
                  onClick={() => setActiveTab("DIAGNÓSTICO CIE-10")}
                  className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                    activeTab === "DIAGNÓSTICO CIE-10"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  DIAGNÓSTICO CIE-10
                </button>
                <button
                  onClick={() => setActiveTab("HALLAZGOS CLÍNICOS")}
                  className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                    activeTab === "HALLAZGOS CLÍNICOS"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  HALLAZGOS CLÍNICOS
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === "TODOS" && (
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
              )}

              {activeTab === "DIAGNÓSTICO CIE-10" && (
                <div className="text-center py-8">
                  <p className="text-gray-500 text-sm">
                    Contenido para DIAGNÓSTICO CIE-10
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    Aquí se mostrarían las opciones de diagnóstico
                  </p>
                </div>
              )}

              {activeTab === "HALLAZGOS CLÍNICOS" && (
                <div className="text-center py-8">
                  <p className="text-gray-500 text-sm">
                    Contenido para HALLAZGOS CLÍNICOS
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    Aquí se mostrarían los hallazgos clínicos
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Widget 2: Historial clínico */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <div className="bg-green-600 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-white font-medium">📋</span>
                <h3 className="text-white font-semibold text-sm">
                  Historial clínico
                </h3>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-500 text-sm">
                Contenido del historial clínico
              </p>
            </div>
          </div>

          {/* Widget 3: Tratamiento actual */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <div className="bg-purple-600 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-white font-medium">💊</span>
                <h3 className="text-white font-semibold text-sm">
                  Tratamiento actual
                </h3>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-500 text-sm">
                Contenido del tratamiento actual
              </p>
            </div>
          </div>

          {/* Widget 4: Plan */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <div className="bg-orange-600 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-white font-medium">📋</span>
                <h3 className="text-white font-semibold text-sm">Plan</h3>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-500 text-sm">Contenido del plan</p>
            </div>
          </div>

          {/* Widget 5: Paraclínicos */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden lg:col-span-2">
            <div className="bg-red-600 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-white font-medium">🔬</span>
                <h3 className="text-white font-semibold text-sm">
                  Paraclínicos
                </h3>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-500 text-sm">Contenido de paraclínicos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
