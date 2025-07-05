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
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import noImage from "images/no-image.png"
export default function ArticleCard({ images,id, name, dimension, }) {
  const { isAuth } = useAuth();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 0,cursor:'pointer' }}
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
                onClick={(e)=>{
                  e.stopPropagation()
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
           onClick={(e)=>{
                
                  navigate(`/product/${id}`)
                }}
             
          height="200"
          image={images?.[0]?.imageUrl || noImage}
          alt={name || "Produit"}
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
          {name || ""}
        </Typography>
        {dimension && (
          <Typography variant="body2" color="text.secondary" sx={{ marginTop: 0.5 }}>
            {dimension}
          </Typography>
        )} 
      </CardContent>

    </Card>
  );
}
