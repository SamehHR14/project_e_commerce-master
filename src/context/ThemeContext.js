import { ThemeProvider } from '@mui/material/styles';
import React, { createContext, useContext, useReducer } from "react";
import getTheme from "../theme/theme";
import {themeEnums} from "../utils/enums";
import CssBaseline from '@mui/material/CssBaseline';

let ThemeStateContext = createContext();
let ThemeDispatchContext = createContext();

 
function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      localStorage.setItem("appTheme", action.payload);
      return { ...state, appTheme: action.payload, };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
 
 
const CustomThemeProvider = ({ children }) => { 
  let [state, dispatch] = useReducer(themeReducer, {
    appTheme:localStorage.getItem("appTheme") || themeEnums.light, 
  }); 
  localStorage.removeItem("dirty"); 
  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        <ThemeProvider theme={getTheme(state.appTheme)}>
          <CssBaseline/>
          {children}
        </ThemeProvider>
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
};

const useThemeState = () => {
  var context = useContext(ThemeStateContext);
  if (context === undefined) {
    throw new Error("useThemeState must be used within a CustomThemeProvider");
  }
  return context;
};

const useThemeDispatch = () => {
  var context = useContext(ThemeDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useThemeDispatch must be used within a ThemeSwticherProvider",
    );
  }
  return context;
};


const toggleTheme = dispatch => { 
  const theme = localStorage.getItem("appTheme");

  dispatch({
    type: "TOGGLE_THEME",
    payload:theme === themeEnums.light ? themeEnums.dark : themeEnums.light ,
  });
};

const setTheme = (dispatch, themePreference) => {
  dispatch({
    type: "TOGGLE_THEME",
    payload: themePreference.value, 
  });
};

export { CustomThemeProvider, useThemeState, useThemeDispatch, toggleTheme, setTheme };
