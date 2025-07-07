import { useState, useCallback } from "react";

interface UseSnackbarReturn {
  isVisible: boolean;
  message: string;
  type: "success" | "info" | "warning" | "error";
  showSnackbar: (
    message: string,
    type?: "success" | "info" | "warning" | "error"
  ) => void;
  hideSnackbar: () => void;
}

export function useSnackbar(): UseSnackbarReturn {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<"success" | "info" | "warning" | "error">(
    "info"
  );

  const showSnackbar = useCallback(
    (
      newMessage: string,
      newType: "success" | "info" | "warning" | "error" = "info"
    ) => {
      setMessage(newMessage);
      setType(newType);
      setIsVisible(true);
    },
    []
  );

  const hideSnackbar = useCallback(() => {
    setIsVisible(false);
  }, []);

  return {
    isVisible,
    message,
    type,
    showSnackbar,
    hideSnackbar,
  };
}
