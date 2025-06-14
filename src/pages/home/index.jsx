import {
  Box,
  Typography,
  Container,
  Grid,
  Button
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// Images
import tv from '../../images/tv5.jpeg';
import table from '../../images/mur61.png';
import buffet from '../../images/boutique3.png';
import bed from '../../images/cuisine1.png';
import table2 from '../../images/table2.jpeg';
import cabinetDentaire1 from '../../images/cabinetDentaire1.jpg';
import HeaderCategory from 'components/swiperSlide/headerCategory';

const bannerImage = "/assets/home.webp";

// Produits
const allProducts = [
  { title: 'Meubles TV', image: tv, path: '/categories/meubles-tv' },
  { title: 'Revêtement mural', image: table, path: '/categories/revetement-mural' },
  { title: 'Aménagement boutique', image: buffet, path: '/categories/amenagement-boutique' },
  { title: 'Cuisine', image: bed, path: '/categories/cuisine' },
  { title: 'Cabinet Médical', image: table2, path: '/categories/cabinet-medical' },
  { title: 'Cabinet Dentaire', image: cabinetDentaire1, path: '/categories/cabinet-dentaire' },
];

// Bannière
const FullWidthBanner = styled(Box)({
  width: '100vw',
  height: '76vh',
  backgroundImage: `url(${bannerImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  position: 'relative',
  left: '50%',
  marginLeft: '-50vw',
});

const HomePages = () => {
  return (
    <Box>
      {/* Bannière principale 
     <FullWidthBanner>
  <Box sx={{ p: 4, borderRadius: 2, textAlign: 'left' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            NTBM
          </Typography>
        </Box>
      </FullWidthBanner>
    */}


     <HeaderCategory  withoutTitle/>

      {/* Section Catégories */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            textAlign: 'center',
            color: '#000',
            fontSize: '1.75rem',
            fontWeight: 700,
            fontStyle: 'italic',
            animation: 'fadeInDown 1s ease-out',
          }}
        >
          Les Catégories
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            mb: 6,
            textAlign: 'center',
            color: '#666',
            fontSize: '1.1rem',
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.6,
            fontStyle: 'italic',
            animation: 'fadeInDown 1.2s ease-out',
          }}
        >
          Des meubles imaginés et conçus pour vous accompagner longtemps
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {allProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                component={RouterLink}
                to={product.path}
                sx={{
                  position: 'relative',
                  display: 'block',
                  height: 320,
                  overflow: 'hidden',
                  borderRadius: 3,
                  boxShadow: 4,
                  textDecoration: 'none',
                  '&:hover .image': {
                    transform: 'scale(1.1)',
                  },
                  '&:hover .overlay': {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                }}
              >
                <Box
                  className="image"
                  sx={{
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                    transition: 'transform 0.7s ease',
                  }}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    bgcolor: 'rgba(0,0,0,0.6)',
                    color: 'white',
                    p: 2,
                    textAlign: 'center',
                    opacity: 0,
                    transform: 'translateY(20px)',
                    transition: 'all 0.4s ease',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontStyle: 'italic',
                      fontSize: '1.2rem',
                      mb: 1,
                    }}
                  >
                    {product.title}
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      color: '#fff',
                      borderColor: '#fff',
                      textTransform: 'none',
                      fontSize: '0.875rem',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    Découvrir
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default memo(HomePages);
