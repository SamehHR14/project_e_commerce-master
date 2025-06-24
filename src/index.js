import React from 'react'; 
import './index.css';
import App from './App'; 
import { render } from "react-dom";      
import { CustomThemeProvider } from "./context/ThemeContext";
import { LoadingContextProvider } from 'context/LoadingContext';
import { AuthProvider } from 'context/AuthContext';
import { ErrorHandlingAndLoadingProvider } from 'context/ErrorsContext';
   

render(
  <React.StrictMode>
       <CustomThemeProvider> 
        <LoadingContextProvider>
        <ErrorHandlingAndLoadingProvider>
          <AuthProvider>
       <App />
       </AuthProvider>
       </ErrorHandlingAndLoadingProvider>
       </LoadingContextProvider>
       </CustomThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);