import React, { useEffect } from 'react';
import { Box, Typography, Container, Button, Grid } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';


// import des images
import tv6 from '../../images/tv6.png';
import mure from '../../images/mure.png';
import mure17 from '../../images/mure17.jpg';
import { useGetProductById } from 'services/hooks/products';

const allProducts = [
  {
    title: 'Temis',
    image: tv6,
    dimension: 'Meuble TV en acacia 160 cm',
    category: 'tv'
  },
  {
    title: 'Anton',
    image: mure,
    dimension: 'Meuble TV en teck massif 130 cm',
    category: 'tv'
  },
  {
    title: 'Milo',
    image: mure17,
    dimension: 'Meuble TV avec rangements 120 cm',
    category: 'mure'
  },
  // ...
];

const ProduitDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getProduct, product } = useGetProductById();

  useEffect(() => {
    if (id) getProduct(id);
  }, [id]);

  if (!product) {
    return <Typography>Chargement...</Typography>;
  }

  if (!product.id) {
    return <Typography>Aucun produit sélectionné.</Typography>;
  }

  const similarProducts = allProducts.filter(
    (p) => p.category === product.category && p.title !== product.title
  );

  return (
    <Container sx={{ py: 4 }}>
      <Button onClick={() => navigate(-1)} sx={{ mb: 2 }}>
        Retour
      </Button>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: '100%', borderRadius: 8 }}
          />
        </Grid>
      

        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
            Produits similaires
          </Typography>
          <Grid container spacing={2}>
            {similarProducts.map((item, idx) => (
              <Grid item xs={6} md={3} key={idx}>
                <Box
                  onClick={() =>
                    navigate(`/produit-details/${item.title}`, {
                      state: { product: item },
                    })
                  }
                  sx={{ cursor: 'pointer' }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', borderRadius: 4 }}
                  />
                  <Typography>{item.title}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProduitDetail;
