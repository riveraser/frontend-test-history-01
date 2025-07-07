import React from "react";
import Widget from "../components/Widget";
import type { ParaclinicalItem } from "../types";

interface ParaclinicalProps {
  data: ParaclinicalItem[];
}

const Paraclinical: React.FC<ParaclinicalProps> = ({ data }) => {
  if (data.length === 0) {
    return (
      <Widget title="Paraclínicos" color="bg-orange-600" icon="🔬">
        <div className="text-center py-4">
          <p className="text-gray-500 text-sm">No hay datos para mostrar</p>
        </div>
      </Widget>
    );
  }

  return (
    <Widget title="Paraclínicos" color="bg-organge-600" icon="🔬">
      <div className="space-y-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <span className="text-orange-600">🔬</span>
              <div className="flex-1">
                <div className="font-medium text-gray-800 text-sm">
                  {item.name}
                </div>
                <div className="text-gray-600 text-xs">{item.result}</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {item.hasAlert && (
                <span className="text-red-500 font-bold">!!</span>
              )}
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                👁️
              </button>
            </div>
          </div>
        ))}
      </div>
    </Widget>
  );
};

export default Paraclinical;
