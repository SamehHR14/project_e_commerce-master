import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography
} from '@mui/material';
import React from 'react';

export default function ArticleCard({ image, title, dimension, price, oldPrice, promo }) {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 0 }}>
      <Box sx={{ position: 'relative' }}>
        {promo && (
          <Chip
            label={promo}
            color="error"
            size="small"
            sx={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }}
          />
        )}
        <CardMedia
          component="img"
          height="200"
          image={image || "https://source.unsplash.com/random/800x600?article"}
          alt={title || "Produit"}
          sx={{ objectFit: 'cover' }}
        />
      </Box>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Typography
          sx={{
            color: '#000',
            fontWeight: 600,
            fontSize: '1.1rem',
            textTransform: 'capitalize',
          }}
        >
          {title || "Titre"}
        </Typography>
        {dimension && (
          <Typography variant="body2" color="text.secondary" sx={{ marginTop: 0.5 }}>
            {dimension}
          </Typography>
        )}
        <Box display="flex" alignItems="center" gap={1} mt={1}>
          <Typography variant="body1" fontWeight="bold">
           
          </Typography>
          {oldPrice && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textDecoration: 'line-through' }}
            >
             
            </Typography>
          )}
        </Box>
      </CardContent>
     
    </Card>
  );
}
