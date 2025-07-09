import { Button, Container, Divider, Grid, ListItemButton, ListItemText } from "@mui/material";
import HeaderCategory from "components/swiperSlide/headerCategory";
import { memo, useEffect, useRef, useState } from "react";
import ArticleCard from "components/articleCard";

import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ScrollReveal from 'scrollreveal';
import { useGetAllCategories } from "services/hooks/category";
import { useNavigate, useParams } from "react-router-dom";
import { useGetAllProducts } from "services/hooks/products";

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
  const navigate = useNavigate();
  const { id } = useParams(); // ID de la catégorie sélectionnée
  const containerRef = useRef(null);

  const [selectedCategoryName, setSelectedCategoryName] = useState("Nos Produits");// pour changer le nom de categorie existant 

  const { getAllCategories, categories } = useGetAllCategories();
  const { getAllProducts, products } = useGetAllProducts();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggle = (value) => () => {
    handleClose();
    setTimeout(() => {
      navigate(`/produit/${value}`);
    }, 300);
  };

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

  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(() => {
    getAllProducts(id);
  }, [id]);

  useEffect(() => {
    const found = categories.find((cat) => String(cat.id) === String(id));
    if (found) {
      setSelectedCategoryName(found.name);//
    } else {
      setSelectedCategoryName("Nos Produits");//
    }
  }, [categories, id]);

  return (
    <>
      <HeaderCategory withoutTitle />
      <Container sx={{ paddingTop: 5, paddingBottom: 5 }}>
        <Grid container spacing={2} sx={{ padding: '20px' }}>
          <Grid
            item
            xs={12}
            sx={{
              padding: '60px !important',
              font: '700 3.5rem/4.5rem "Inter",sans-serif',
              textAlign: 'center',
              margin: '20px',
            }}
          >
            {selectedCategoryName}
          </Grid>

          <Grid item xs={12} sx={{ padding: '20px' }}>
            <Divider sx={{ width: '100%' }} />
          </Grid>

          <Grid
            container
            spacing={2}
            sx={{ padding: '20px', alignItems: 'center' }}
          >
            <Grid xs={'auto'} sx={{ color: '#103a3a', opacity: 0.8 }}>
              Filtre:
            </Grid>
            <Grid xs={'auto'}>
              <div>
                <Button
                  id="demo-customized-button"
                  aria-controls={open ? 'demo-customized-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  variant="text"
                  sx={{
                    color: '#103a3a',
                    backgroundColor: 'transparent',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      textDecoration: 'underline',
                    },
                  }}
                  disableElevation
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
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
                  <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                  >
                    {categories.map((value) => (
                      <ListItem key={value.id} disablePadding>
                        <ListItemButton
                          role={undefined}
                          onClick={handleToggle(value.id)}
                          dense
                        >
                          <ListItemText id={value.id} primary={value.name} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </StyledMenu>
              </div>
            </Grid>
          </Grid>

          {products.map((product, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={product.id || index}
              className="reveal-card"
            >
              <ArticleCard {...product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default memo(Produits);
