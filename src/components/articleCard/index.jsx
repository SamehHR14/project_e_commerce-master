import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useRef, useState } from 'react'; 
 
export default function ArticleCard(article) {
  return (
   <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={article.image || "https://source.unsplash.com/random/800x600?article"}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{
            color: '#000',
            fontWeight: 600,
            mb: 1,
            fontSize: '1.2rem',
            textAlign: 'center',
            textTransform: 'capitalize',
          }} gutterBottom variant="h5" component="div">
          {article.title || "Lizard"}
          </Typography> 
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
        <Button 
        sx={{
               backgroundColor: '#000',
                      color: '#fff',
                      textTransform: 'none',
                      padding: '8px 24px',
                      '&:hover': { backgroundColor: '#333' },
                      mt: 'auto', // Pousse le bouton vers le bas de la CardContent
                   
        }}>
          Découvrir
        </Button>
      </CardActions>
    </Card>
  );
}
