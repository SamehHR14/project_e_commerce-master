import React, { useEffect } from 'react';
import { Container, Grid, Typography, Divider } from '@mui/material';
import HeaderCategory from 'components/swiperSlide/headerCategory';
import ArticleCard from 'components/articleCard';

import tv1 from '../../images/tv6.png';
import tv2 from '../../images/tv7.png';
import tv3 from '../../images/tv4.png';
import tv4 from '../../images/mure2.png';
import { useGetLastAllProducts } from 'services/hooks/products';

const products = [
  { image: tv1, dimension: '' },
  { image: tv2, dimension: '' },
  { image: tv3, dimension: '' },
  { image: tv4, dimension: '' },
];

const Nouveaute = () => {
  const {
      getLastAllProducts,
      lastProducts
    } = useGetLastAllProducts();
    useEffect(()=>{
getLastAllProducts();
    },[])
  return (
    <>
     <HeaderCategory  withoutTitle/>
      <Container sx={{ paddingTop: 5, paddingBottom: 5 }}>
        <Typography
          variant="h3"
          fontWeight={700}
          textAlign="center"
          gutterBottom
        >
          Nouveautés
        </Typography>

        <Divider sx={{ marginBottom: 4 }} />

<Grid container spacing={3} sx={{ minHeight: '22vh' }}>
  {lastProducts.length === 0 ? (
    <Grid item xs={12}>
      <Typography variant="h6" align="center" color="text.secondary">
        Aucune nouveauté pour le moment.
      </Typography>
    </Grid>
  ) : (
    lastProducts.map((product, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <ArticleCard {...product} />
      </Grid>
    ))
  )}
</Grid>
      </Container>
    </>
  );
};

export default Nouveaute;
