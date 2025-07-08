import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { HealthDataTab, SnackbarType } from "@/types";

interface UIState {
  snackbar: {
    isVisible: boolean;
    message: string;
    type: SnackbarType;
  };
  healthDataTab: HealthDataTab;
  showSnackbar: (message: string, type?: SnackbarType) => void;
  showSnackbarForItem: (itemTitle: string, hasAlert: boolean) => void;
  hideSnackbar: () => void;
  setHealthDataTab: (tab: HealthDataTab) => void;
}

export const useUIStore = create<UIState>()(
  devtools(
    (set) => ({
      snackbar: {
        isVisible: false,
        message: "",
        type: "info",
      },
      healthDataTab: "TODOS",
      showSnackbar: (message: string, type: SnackbarType = "info") => {
        set(() => ({
          snackbar: {
            isVisible: true,
            message,
            type,
          },
        }));
      },
      showSnackbarForItem: (itemTitle: string, hasAlert: boolean) => {
        const type = hasAlert ? "warning" : "info";
        set(() => ({
          snackbar: {
            isVisible: true,
            message: `Ver detalles de: ${itemTitle}`,
            type,
          },
        }));
      },
      hideSnackbar: () => {
        set((store) => ({
          snackbar: {
            ...store.snackbar,
            isVisible: false,
          },
        }));
      },
      setHealthDataTab: (tab: HealthDataTab) => {
        set({ healthDataTab: tab });
      },
    }),
    {
      name: "ui-store",
    }
  )
);
