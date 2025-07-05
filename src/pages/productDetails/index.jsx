import React, { useEffect } from 'react';
import {
  Box, Typography, Container, Grid, Card, CardMedia, CardContent, Button, Divider
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetProductById } from 'services/hooks/products';
import { SwiperCoverflowMemo } from 'components/swiperSlide/images';
import ArticleCard from 'components/articleCard';

const ProduitDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProduct, product } = useGetProductById();

  useEffect(() => {
    if (id) getProduct(id);
  }, [id]);

  if (!product?.id) {
    return <Typography variant="h6" sx={{ mt: 4 }}>Aucun produit sélectionné.</Typography>;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Product Header */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <SwiperCoverflowMemo images={product.images} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {product.name}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {product.shortDescription}
          </Typography>

          {/* Price or other feature (optional) */}
          {product?.price && (
            <Typography variant="h5" fontWeight={600} color="primary" sx={{ my: 2 }}>
              {product.price} TND
            </Typography>
          )}

 
        </Grid>
      </Grid>

      {/* Description */}
      {product?.description?.length > 7 && (
        <Box sx={{ mt: 6, p: 3, bgcolor: '#f9f9f9', borderRadius: 2 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Description
          </Typography>
          <Typography
            component="div"
            sx={{ fontSize: '16px', color: 'text.secondary' }}
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </Box>
      )}

      {/* Similar Products */}
      {product?.similarProducts?.length > 0 && (
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Produits similaires
          </Typography>
          <Grid container spacing={3}>
            {product.similarProducts.map((similarProduct, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
             <ArticleCard {...similarProduct} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default ProduitDetail;
