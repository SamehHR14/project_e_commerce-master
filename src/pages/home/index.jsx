import { Box, Typography, Container, Grid, Button, IconButton } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import HeaderCategory from 'components/swiperSlide/headerCategory';
import { Edit } from '@mui/icons-material';
import { useAuth } from 'context/AuthContext';
import { useGetAllCategories } from 'services/hooks/category';
import { useTranslation } from 'react-i18next';

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
              e.stopPropagation();
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
      {/* Composant d'en-tête */}
      <HeaderCategory withoutTitle />

      {/* Nouveau bloc image + texte d'accueil */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Image à gauche */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/assets/home.webp"
              alt="Accueil NTBM"
              sx={{
                width: '100%',
                borderRadius: 3,
                maxHeight: 400,
                objectFit: 'cover',
                boxShadow: 3,
              }}
            />
          </Grid>

          {/* Texte à droite */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: '#4E342E' }}>
                {t('home.welcomeMessage')}
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ fontStyle: 'italic', mb: 3 }}>
                {t('home.slogan')}
              </Typography>
              <Button
                variant="contained"
                size="large"
                component={RouterLink}
                to="/contact"
                sx={{ backgroundColor: '#db7958ff' }}
              >
                {t('home.contactUs')}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Liste des catégories */}
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
