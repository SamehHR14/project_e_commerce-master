// src/index.js
import React from 'react';
import './index.css';
import App from './App';
import { render } from "react-dom"; // Note: createRoot de "react-dom/client" est la nouvelle approche recommandée pour React 18+
import { CustomThemeProvider } from "./context/ThemeContext";
import { LoadingContextProvider } from 'context/LoadingContext';
import { AuthProvider } from 'context/AuthContext';
import { ErrorHandlingAndLoadingProvider } from 'context/ErrorsContext';

import './i18n';

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