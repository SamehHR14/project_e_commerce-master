import { Button, Checkbox, Container, Divider, Grid, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HeaderCategory from "components/swiperSlide/headerCategory";
import { memo, useState } from "react";

import tv from '../../images/tv.png';
import table from '../../images/table.jpeg';
import buffet from '../../images/buffet.jpeg';
import bed from '../../images/bed.jpeg';
import table2 from '../../images/table2.jpeg';  
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

const category = {
    id: 1,
    title: 'Category 1',
};
const categories = [
  { id: 1, title: 'Category 1' },
  { id: 2, title: 'Category 2' },
  { id: 3, title: 'Category 3' },
];
const allProducts = [
  { title: 'Meubles TV', image: tv, path: '/categories/meubles-tv' },
  { title: 'Tables basses', image: table, path: '/categories/tables-basses' },
  { title: 'Buffets', image: buffet, path: '/categories/buffets' },
 
  { title: 'Cabinet Médical', image: table2, path: '/categories/cabinet-medical' },  
  { title: 'Meubles TV', image: tv, path: '/categories/meubles-tv' },
  { title: 'Tables basses', image: table, path: '/categories/tables-basses' },
  { title: 'Buffets', image: buffet, path: '/categories/buffets' },
  { title: 'Lits', image: bed, path: '/categories/lits' },
  { title: 'Cabinet Médical', image: table2, path: '/categories/cabinet-medical' },  
  { title: 'Meubles TV', image: tv, path: '/categories/meubles-tv' },
  { title: 'Tables basses', image: table, path: '/categories/tables-basses' },
  { title: 'Buffets', image: buffet, path: '/categories/buffets' },

  { title: 'Cabinet Médical', image: table2, path: '/categories/cabinet-medical' },  
  { title: 'Meubles TV', image: tv, path: '/categories/meubles-tv' },
  { title: 'Tables basses', image: table, path: '/categories/tables-basses' },
  { title: 'Buffets', image: buffet, path: '/categories/buffets' },

  { title: 'Cabinet Médical', image: table2, path: '/categories/cabinet-medical' },  
  { title: 'Meubles TV', image: tv, path: '/categories/meubles-tv' },
  { title: 'Tables basses', image: table, path: '/categories/tables-basses' },
  { title: 'Buffets', image: buffet, path: '/categories/buffets' },
  
  { title: 'Cabinet Médical', image: table2, path: '/categories/cabinet-medical' },  
  { title: 'Meubles TV', image: tv, path: '/categories/meubles-tv' },
  { title: 'Tables basses', image: table, path: '/categories/tables-basses' },
  { title: 'Buffets', image: buffet, path: '/categories/buffets' },

  { title: 'Cabinet Médical', image: table2, path: '/categories/cabinet-medical' },  
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


              {allProducts.map((category, index) =>{

                return (<Grid item xs={12} sm={6} md={4} lg={3}>
                  <ArticleCard {...category} />
                </Grid>
                )})
              }

        </Grid>
        </Container>
    </>)
}

export default memo(Produits);
