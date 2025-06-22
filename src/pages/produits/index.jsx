import { Button, Checkbox, Container, Divider, Grid, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HeaderCategory from "components/swiperSlide/headerCategory";
import { memo, useEffect, useRef, useState } from "react";

import tv from '../../images/tv6.png';
import table from '../../images/tv6.png';
import buffet from '../../images/tv7.png';
import bed from '../../images/tv4.png';
import table2 from '../../images/tv8.png';  
import bannerImage from '../../images/home_header.jpg'; // Assurez-vous que le chemin est correct
import MyMapSection from 'components/googleMaps';
import ArticleCard from "components/articleCard";

import { styled, alpha } from '@mui/material/styles'; 
import Menu from '@mui/material/Menu'; 
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit'; 
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';   
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import ScrollReveal from 'scrollreveal';

const category = {
   
    title: 'Liste produits',
     id: 1,
     title: 'Catégorie 1',

};
const categories = [
  { id: 1, title: 'Category 1' },
  { id: 2, title: 'Category 2' },
  { id: 3, title: 'Category 3' },
];
const allProducts = [
  //tv
  {
    title: 'Temis',
    image: require('../../images/tv6.png'), // remplace par le bon chemin
    dimension: 'Meuble TV en acacia 160 cm',
    
  },
  {
    title: 'Anton',
    image: require('../../images/mure.png'),
    dimension: 'Meuble TV en teck massif 130 cm',
   
  },
  
  {
    title: 'Basil',
    image: require('../../images/tv7.png'),
    dimension: 'Meuble TV en teck massif 140 cm',
   
  },
  {
    title: 'Lana',
    image: require('../../images/tv4.png'),
    dimension: 'Meuble TV en chêne 150 cm',
   
  },
  //mure
  {
    title: 'Milo',
    image: require('../../images/mure17.jpg'),
    dimension: 'Meuble TV avec rangements 120 cm',
    
  },
  {
    title: 'Nova',
    image: require('../../images/mur16.jpg'),
    dimension: 'Meuble TV moderne 180 cm',
   
  },
  
   {
    title: 'Nova',
     image: require('../../images/mure2.png'),
   
    dimension: 'Meuble TV moderne 180 cm',
    
  
  },
   {
    title: 'Nova',
    image: require('../../images/mure3.png'),
    dimension: 'Meuble TV moderne 180 cm',
    
    
  },


   //boutique
  {
    title: 'boutique1',
    image: require('../../images/boutique1.png'),
    dimension: 'Meuble TV avec rangements 120 cm',
    
  },
  {
    title: 'Nova',
    image: require('../../images/boutique2.png'),
    dimension: 'Meuble TV moderne 180 cm',
   
  },
  
   {
    title: 'Nova',
     image: require('../../images/boutique3.png'),
   
    dimension: 'Meuble TV moderne 180 cm',
    
  
  },
   {
    title: 'Nova',
    image: require('../../images/boutique5.png'),
    dimension: 'Meuble TV moderne 180 cm',
    
    
  },

   //cuisine
  {
    title: 'cuisine',
    image: require('../../images/cuisine1.png'),
    dimension: 'Meuble TV avec rangements 120 cm',
    
  },
  {
    title: 'Nova',
    image: require('../../images/cuisine4.png'),
    dimension: 'Meuble TV moderne 180 cm',
   
  },
  
   {
    title: 'Nova',
     image: require('../../images/cuisine81.png'),
   
    dimension: 'Meuble TV moderne 180 cm',
    
  
  },
   {
    title: 'Nova',
    image: require('../../images/boutique5.png'),
    dimension: 'Meuble TV moderne 180 cm',
    
    
  },
];



const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const Produits = () => { 
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ScrollReveal().reveal('.reveal-card', {
        duration: 800,
        distance: '50px',
        easing: 'ease-in-out',
        origin: 'bottom',
        interval: 100, 
      });
    }
  }, []);

    return (<>
        <HeaderCategory />
        <Container>
        <Grid container spacing={2} sx={{ padding: '20px' }}>
            <Grid item xs={12} sx={{
                padding: '60px !important',
                font: '700 3.5rem/4.5rem "Inter",sans-serif', textAlign: 'center', margin: '20px'
            }}>
                {category.title}
            </Grid>
            <Grid item xs={12} sx={{ padding: '20px' }}>
                <Divider sx={{ width: '100%' }} />
            </Grid>

            <Grid container spacing={2} sx={{ padding: '20px',alignItems: 'center'

 }}>
                 <Grid xs={'auto'} sx={{ color: '#103a3a' ,opacity: 0.8}}>
               Filtre:
                      </Grid> 
                 <Grid xs={'auto'} >
                      <div> 
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="text"
        sx={{ color: '#103a3a',
                            backgroundColor:'transparent',
                            textTransform:'none',
                        '&:hover': {
                            backgroundColor:'transparent',
                            textDecoration: 'underline',
                        },
                    }} 
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon/>}
      >
        Catégorie
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {categories.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value} 
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value.id)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': value.title }}
                />
              </ListItemIcon>
              <ListItemText id={ value.id } primary={ value.title } />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
      </StyledMenu>
    </div>



                  </Grid> 
            </Grid>


          {allProducts.map((category, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={category.id || index} className="reveal-card">
          <ArticleCard {...category} />
        </Grid>
      ))}

        </Grid>
        </Container>
    </>)
}

export default memo(Produits);
