import React from 'react'; 
import './index.css';
import App from './App'; 
import { render } from "react-dom";      
import { CustomThemeProvider } from "./context/ThemeContext";
   

render(
  <React.StrictMode>
       <CustomThemeProvider> 
       <App />
       </CustomThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);