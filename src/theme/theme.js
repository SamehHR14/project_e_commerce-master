import { createTheme } from '@mui/material/styles';
import {lightPalette,darkPalette} from "./colors";
import {themeEnums} from "../utils/enums"
 
const themes = {
   [themeEnums.light] :createTheme(lightPalette),
   [themeEnums.dark] : createTheme(darkPalette), 
  };
  
export default function getTheme(theme) {
    return themes[theme];
  }
   