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

const drawerWidth = 240;

const navItems = [
  { label: 'Acceuil', path: '/' },
  { label: 'Produit', path: '/produit' },
  { label: 'Nouveautés', path: '/nouveautes' },
  { label: 'A propos', path: '/a-propos' },
  { label: 'Contact', path: '/contact' }
];

const styledLink = {
  textDecoration: 'none',
  fontWeight: 500,
  fontStyle: 'italic',
  textTransform: 'capitalize',
  fontFamily: 'Playfair Display, serif',
  fontSize: '1rem',
  color: '#5D4037',
  letterSpacing: '0.5px',
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
        label: 'Ajouter une catégorie',
        action: () => {
          setTimeout(() => navigate(`/categoryForm`), 300);
          handleDrawerToggle();
        }
      },
      {
        label: 'Ajouter un produit',
        action: () => {
          setTimeout(() => navigate(`/productForm`), 300);
          handleDrawerToggle();
        }
      },
      {
        label: 'Déconnexion',
        action: logout
      }
    ] : [];
  }, [isAuth]);

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
          <ListItem key={label} disablePadding>
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
            <img src={logo} alt="Logo NTBM" style={{ height: '50px', marginRight: '10px' }} />
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(({ label, path }) => (
              <Button key={label} component={Link} to={path} sx={styledLink}>
                {label}
              </Button>
            ))}
          </Box>

          {isAuth && (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                <Tooltip title="Paramètres">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
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
                  Ajouter une catégorie
                </MenuItem>
                <MenuItem onClick={() => { setTimeout(() => navigate(`/productForm`), 300); handleClose(); }}>
                  Ajouter un produit
                </MenuItem> 
                <Divider />
                <MenuItem onClick={() => { logout(); handleClose(); }}>
                  <Logout fontSize="small" />
                  Déconnexion
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
