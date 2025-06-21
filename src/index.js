import React from 'react'; 
import './index.css';
import App from './App'; 
import { render } from "react-dom";      
import { CustomThemeProvider } from "./context/ThemeContext";
import { LoadingContextProvider } from 'context/LoadingContext';
   

render(
  <React.StrictMode>
       <CustomThemeProvider> 
        <LoadingContextProvider>
       <App />
       </LoadingContextProvider>
       </CustomThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);