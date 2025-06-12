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
import { Link } from 'react-router-dom';

import logo from '../../images/logo.png'; 

const drawerWidth = 240;

const styledLink = {
  textDecoration: 'none',
  fontWeight:700,
  textTransform: 'Capitalize', // Pas de majuscules
  backgroundColor: 'transparent', // Pas de fond au survol
  color: '#4E342E', // Couleur du texte
  '&:hover': {
    backgroundColor:'transparent !important', // Pas de fond au survol
    textDecoration: 'underline !important', // Soulignement au survol
  },
};

// Liste des éléments de navigation avec leurs chemins
const navItems = [
  { label: 'Acceuil', path: '/' },
  { label: 'Produit', path: '/produit' },
  { label: 'Nouveautés', path: '/nouveautes' },
  { label: 'A propos', path: '/a-propos' },
  { label: 'Contact', path: '/contact' }
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Menu mobile
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        backgroundColor: '#F5F5DC',
        height: '100%',
        color: '#4E342E',
      }}
    >
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold' }}>
        NTBM
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ label, path }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton component={Link} to={path} sx={{ textAlign: 'center', ...styledLink }}>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex',position: 'relative'}}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#d9d7d2', boxShadow: 'none' }}>
 
        <Toolbar>
          {/* Icône du menu (visible en mobile) */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: '#4E342E' }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo texte */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <img
            src={logo}
            alt="Logo NTBM"
            style={{ maxWidth: '100%', height: '50px', marginRight: '10px' }}
          /></Box>
        

          {/* Espace flexible */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Boutons de navigation (desktop) */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(({ label, path }) => (
              <Button
                key={label}
                component={Link}
                to={path}
                sx={styledLink}
              > 
                {label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer mobile */}
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
              backgroundColor: '#F5F5DC',
              color: '#4E342E'
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