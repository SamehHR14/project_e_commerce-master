import { createContext, useContext, useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

const LoadingContext = createContext();

export const LoadingDialog = ({ open }) => {
  return (
    <Backdrop
      sx={{
        color: "#744e20",  
        zIndex: (theme) => theme.zIndex.modal + 10,
        backgroundColor: "rgba(85, 85, 85, 0.1)",
      }}
      open={open}
    >
      <CircularProgress color="inherit" size={48} thickness={4} />
    </Backdrop>
  );
};

export function LoadingContextProvider({ children }) {
  const [loading, setLoading] = useState(0);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <LoadingDialog open={loading} />
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoadingContext() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoadingContext must be used within a LoadingContextProvider");
  }
  return context;
}