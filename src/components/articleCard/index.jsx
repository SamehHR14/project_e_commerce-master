import { Edit } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
  Zoom
} from '@mui/material';
import { useAuth } from 'context/AuthContext';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ArticleCard({ image,id, title, dimension, price, oldPrice, promo }) {
  const { isAuth } = useAuth();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 0 }}
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}>
      <Box sx={{ position: 'relative' }}>

        {isAuth && (
          <Zoom in={show}>
            <Tooltip title="Modifier le produit" placement="top">
              <IconButton
                size="small"
                sx={{
                  position: 'absolute',
                  top: 10,
                  right: 10,         
                  zIndex: 1,
                  color: 'black',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
                onClick={()=>{
                  navigate(`/productForm/${id}`)
                }}
              >
                <Edit />
              </IconButton>
            </Tooltip>
          </Zoom>
        )}
        <CardMedia
          component="img"
          height="200"
          image={image || "https://source.unsplash.com/random/800x600?article"}
          alt={title || "Produit"}
          sx={{
            objectFit: 'cover', 
            transition: 'transform 0.4s ease',
            '&:hover': {
              transform: 'scale(1.05) translateY(-10px)',
            },
          }}
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
          {title || ""}
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
