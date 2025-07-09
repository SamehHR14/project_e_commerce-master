

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png'; 
import { Avatar, Menu, MenuItem, Tooltip } from '@mui/material';
import { Logout } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import { useAuth } from 'context/AuthContext';


import { useTranslation } from 'react-i18next'; 
import LanguageSelector from '../LanguageSelector'; 

const drawerWidth = 240;

const styledLink = {
  textDecoration: 'none',
  fontWeight: 800,              // un peu plus gras que 500
  fontStyle: 'italic',
  textTransform: 'capitalize',
  fontFamily: 'Playfair Display, serif',
  fontSize: '1.125rem', 
  color: '#5D4037',
  letterSpacing: '2px',
  '&:hover': {
    backgroundColor: 'transparent !important',
    textDecoration: 'underline !important',
  },
};


function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { isAuth, logout } = useAuth();
  const navigate = useNavigate();


  const { t } = useTranslation(); //

  
  const navItems = React.useMemo(() => [
    { label: t('navbar.home'), path: '/' }, //
    { label: t('navbar.products'), path: '/produit' }, //
    { label: t('navbar.newArrivals'), path: '/nouveautes' }, 
    { label: t('navbar.about'), path: '/a-propos' }, //
    { label: t('navbar.contact'), path: '/contact' } //
  ], [t]); // Dépendance à `t` pour re-calculer si la langue change

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navItemsAdmin = React.useMemo(() => {
    return isAuth ? [
      {
        label: t('adminMenu.addCategory'), // Clé de traduction
        action: () => {
          setTimeout(() => navigate(`/categoryForm`), 300);
          handleDrawerToggle();
        }
      },
      {
        label: t('adminMenu.addProduct'), // Clé de traduction
        action: () => {
          setTimeout(() => navigate(`/productForm`), 300);
          handleDrawerToggle();
        }
      },
      {
        label: t('adminMenu.logout'), // Clé de traduction
        action: logout
      }
    ] : [];
  }, [isAuth, t, navigate, logout]); // Dépendance à `t`

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        backgroundColor: '#F2ECE4',
        height: '100%',
        color: '#5D4037',
      }}
    >
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold' }}>
        NTBM
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ label, path }) => (
          <ListItem key={path} disablePadding>
            <ListItemButton component={Link} to={path} sx={{ textAlign: 'center', ...styledLink }}>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
        {navItemsAdmin.map(({ label, action }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton onClick={action} sx={{ textAlign: 'center', ...styledLink }}>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
        {/* Ajouter le LanguageSelector dans le tiroir mobile aussi si désiré */}
        {/* <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <LanguageSelector />
          </ListItemButton>
        </ListItem> */}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#F9F7F1', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: '#5D4037' }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
            <img src={logo} alt="Logo NTBM" style={{ height: '50px', marginRight: '10px' }} /> {/* */}
          </Box>

          <Box sx={{ flexGrow: 1 }} /> {/* Cette boîte pousse les éléments suivants vers la droite */}

          {/* Liens de navigation pour desktop */}
          <Box sx={{
              display: { xs: 'none', sm: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
              flexGrow: 1, // Prend l'espace central
              gap: 5 // espace entre les titres
            }}>
              {navItems.map(({ label, path }) => (
                <Button key={path} component={Link} to={path} sx={styledLink}>
                  {label}
                </Button>
              ))}
            </Box>

          {/* SÉLECTEUR DE LANGUE : Positionné après les liens de navigation, toujours visible. */}
          {/* Sa marge gauche (ml:2) est définie dans LanguageSelector.jsx, ce qui permet un espacement cohérent avec l'icône de paramètres. */}
          {/*<LanguageSelector />*/}

          {/* Section d'administration : visible uniquement si l'utilisateur est authentifié */}
          {isAuth && (
            <>
              {/* Le Box parent gère l'alignement et la marge entre le LanguageSelector et SettingsIcon */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Tooltip title={t('adminMenu.settingsTooltip')}> {/* Traduire le tooltip */}
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }} // Ajustez cette marge si nécessaire par rapport au LanguageSelector
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>
                      <SettingsIcon />
                    </Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&::before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={() => { setTimeout(() => navigate(`/categoryForm`), 300); handleClose(); }}>
                  {t('adminMenu.addCategory')} {/* Traduire */}
                </MenuItem>
                <MenuItem onClick={() => { setTimeout(() => navigate(`/productForm`), 300); handleClose(); }}>
                  {t('adminMenu.addProduct')} {/* Traduire */}
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => { logout(); handleClose(); }}>
                  <Logout fontSize="small" />
                  {t('adminMenu.logout')} {/* Traduire */}
                </MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#F2ECE4',
              color: '#5D4037'
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;