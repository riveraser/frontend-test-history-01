import ClinicalHistory from "@features/ClinicalHistory";
import CurrentTreatment from "@features/CurrentTreatment";
import Plan from "@features/Plan";
import Paraclinical from "@features/Paraclinical";
import AddHealthData from "@features/AddHealthData";
import { LoadingSpinner } from "@components/LoadingSpinner";
import { ErrorMessage } from "@components/ErrorMessage";
import { useClinicalHistory } from "@hooks/useClinicalHistory";
import { useCurrentTreatment } from "@hooks/useCurrentTreatment";
import { usePlan } from "@hooks/usePlan";
import { useParaclinical } from "@hooks/useParaclinical";

function App() {
  const clinicalHistory = useClinicalHistory();
  const currentTreatment = useCurrentTreatment();
  const plan = usePlan();
  const paraclinical = useParaclinical();

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
                {clinicalHistory.isLoading ? (
                  <LoadingSpinner className="py-8" />
                ) : clinicalHistory.error ? (
                  <ErrorMessage message="Error al cargar el historial clínico" />
                ) : (
                  <ClinicalHistory data={clinicalHistory.data || []} />
                )}
              </div>

              {/* Widget 3: Plan */}
              <div>
                {plan.isLoading ? (
                  <LoadingSpinner className="py-8" />
                ) : plan.error ? (
                  <ErrorMessage message="Error al cargar el plan" />
                ) : (
                  <Plan data={plan.data || []} />
                )}
              </div>

              {/* Widget 4: Tratamiento actual */}
              <div>
                {currentTreatment.isLoading ? (
                  <LoadingSpinner className="py-8" />
                ) : currentTreatment.error ? (
                  <ErrorMessage message="Error al cargar el tratamiento actual" />
                ) : (
                  <CurrentTreatment data={currentTreatment.data || []} />
                )}
              </div>

              {/* Widget 5: Paraclínicos */}
              <div>
                {paraclinical.isLoading ? (
                  <LoadingSpinner className="py-8" />
                ) : paraclinical.error ? (
                  <ErrorMessage message="Error al cargar los paraclínicos" />
                ) : (
                  <Paraclinical data={paraclinical.data || []} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
