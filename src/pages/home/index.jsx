import { Box, Typography, Container, Grid, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { memo, useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

// Traduction
import { useTranslation } from 'react-i18next';

// Images
import { Edit } from '@mui/icons-material';
import { useAuth } from 'context/AuthContext';
import { useGetAllCategories } from 'services/hooks/category';

const bannerImage = "/assets/home.webp"; // Vérifie ce chemin

const FullWidthBanner = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '76vh',
  backgroundImage: `url(${bannerImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  textAlign: 'center',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    height: '50vh',
    padding: '0 1rem',
  },
}));

// Extraire CustomCategory hors du composant principal pour éviter redéclaration à chaque render
const CustomCategory = memo(({ product, isAuth, navigate, t }) => {
  const [show, setShow] = useState(false);

  return (
    <Grid
      item
      xs={12}
      sm={6}
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'block',
          height: 300,
          overflow: 'hidden',
          borderRadius: 3,
          boxShadow: 4,
          textDecoration: 'none',
          cursor: 'pointer',
          '&:hover .image': {
            transform: 'scale(1.1)',
          },
          '&:hover .overlay': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        }}
        onClick={() => {
          navigate(`/produit${product.id ? `/${product.id}` : ''}`);
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            navigate(`/produit${product.id ? `/${product.id}` : ''}`);
          }
        }}
      >
        {isAuth && (
          <IconButton
            size="small"
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              zIndex: 2400,
              color: 'black',
              display: show ? 'flex' : 'none',
              '&:hover': {
                color: 'primary.main',
              },
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              navigate(`/categoryForm${product.id ? `/${product.id}` : ''}`);
            }}
            aria-label={t('categoryCard.edit')}
          >
            <Edit />
          </IconButton>
        )}

        <Box
          className="image"
          sx={{
            backgroundImage: product.imageUrl ? `url(${product.imageUrl})` : 'none',
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
            {product.name || ''}
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
            onClick={(e) => {
              e.stopPropagation(); // éviter que le click déclenche aussi onClick du parent
              navigate(`/produit${product.id ? `/${product.id}` : ''}`);
            }}
          >
            {t('categoryCard.discover')}
          </Button>
        </Box>
      </Box>
    </Grid>
  );
});

const HomePages = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { getAllCategories, categories } = useGetAllCategories();

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <Box>
      <FullWidthBanner>
        <Box sx={{ backgroundColor: 'rgba(0,0,0,0.5)', p: 4, borderRadius: 2 }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '3.5rem' }, mb: 2 }}>
            {t('home.welcomeMessage')}
          </Typography>
          <Typography variant="h6" sx={{ fontStyle: 'italic', fontSize: { xs: '1rem', md: '1.25rem' } }}>
            {t('home.slogan')}
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ mt: 3 }}
            component={RouterLink}
            to="/contact"
            color="warning"
          >
            {t('home.contactUs')}
          </Button>
        </Box>
      </FullWidthBanner>

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
          {t('home.categoriesTitle')}
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
          {t('home.categoriesDescription')}
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {categories.map((categorie, index) => (
            <CustomCategory
              product={categorie}
              key={categorie.id || index}
              isAuth={isAuth}
              navigate={navigate}
              t={t}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default memo(HomePages);
