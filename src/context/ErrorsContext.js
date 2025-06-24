import React, { useState, createContext, useContext } from "react";
import AlertSnackbar from "components/snackbar";

// 1. Create context
export const ErrorAndLoadingContext = createContext();

// 2. Context provider component
export function ErrorHandlingAndLoadingProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("Operation successful");
  const [severity, setSeverity] = useState("success"); // "success" | "error" | "info" | "warning"

  return (
    <ErrorAndLoadingContext.Provider
      value={{
        snackbar: {
          setMsg,
          setSeverity,
          setOpen,
        },
      }}
    >
      {/* Snackbar component always mounted */}
      <AlertSnackbar
        open={open}
        msg={msg}
        severity={severity}
        setOpen={setOpen}
      />
      {children}
    </ErrorAndLoadingContext.Provider>
  );
}

// 3. Custom hook to use the context
export function useErrorHandlingContext() {
  const context = useContext(ErrorAndLoadingContext);
  if (!context) {
    throw new Error("useErrorHandlingContext must be used within ErrorHandlingAndLoadingProvider");
  }
  return context;
}
