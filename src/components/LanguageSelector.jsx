
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Box,
  IconButton,
  Menu,
  Tooltip
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language'; 

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    handleClose(); 
  };

  return (
    <Box sx={{ ml: 2 }}> {/* Marge à gauche pour l'espacement */}
      <Tooltip title="Changer de langue">
        <IconButton
          aria-label="changer de langue"
          aria-controls={open ? 'language-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          color="inherit" // Pour qu'il hérite de la couleur du thème (utile dans un AppBar)
        >
          <LanguageIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'language-button',
        }}
      >
        <MenuItem onClick={() => handleChangeLanguage('en')} selected={i18n.language === 'en'}>
          English
        </MenuItem>
        <MenuItem onClick={() => handleChangeLanguage('fr')} selected={i18n.language === 'fr'}>
          Français
        </MenuItem>
        {/* Ajoutez d'autres langues ici si nécessaire */}
      </Menu>
    </Box>
  );
}

export default LanguageSelector;