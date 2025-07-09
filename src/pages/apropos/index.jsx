import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Button,
} from '@mui/material';
import HeaderCategory from "components/swiperSlide/headerCategory";

import { getTranslation } from 'utils';
import{useAuth}from 'context/AuthContext'

// Fonction pour importer dynamiquement les images
function importAll(r) {

  const images = {};
  r.keys().forEach((key) => (images[key.replace('./', '')] = r(key)));
  return images;
}

const imageModules = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));




const Apropos = () => {
  const {language}=useAuth()
  return (
    <>
      <HeaderCategory withoutTitle />

    
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Titre principal */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: '#4E342E' }}>
           {/*À propos*/} 
           {
           getTranslation(language,"apropos")
           }
          </Typography>
          <Typography variant="h6" color="text.secondary" maxWidth="md" mx="auto">
            {/*Design, tradition & écoresponsabilité — un savoir-faire au service de vos espaces.*/}
            {
            getTranslation(language,"aproposdescription")
            }
          </Typography>
        </Box>

        {/* Bloc Histoire */}
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Card elevation={4} sx={{ borderRadius: 3, p: 2 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#6D4C41' }}>
                  {/*Notre Historique*/}
                  {
                    getTranslation(language,"notrehistorique")
                  }
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  {
                    getTranslation(language,"descriptionHistorique")
                  }
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card elevation={4} sx={{ borderRadius: 3 }}>
              <CardMedia
                component="img"
                image="/assets/2.jpg"
                alt="Atelier NTBM"
                sx={{ borderRadius: 3, maxHeight: 300, objectFit: 'cover' }}
              />
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: 8 }} />



 <Grid container spacing={6} alignItems="center">
  {/* Image à gauche */}
  <Grid item xs={12} md={6}>
    <Card elevation={4} sx={{ borderRadius: 3 }}>
      <CardMedia
        component="img"
        image="/assets/1.jpg" // Assure-toi que l'image est bien placée dans le dossier
        alt="Notre mission"
        sx={{ borderRadius: 3, maxHeight: 300, objectFit: 'cover', width: '100%' }}
      />
    </Card>
  </Grid>

  {/* Texte à droite */}
  <Grid item xs={12} md={6}>
    <Card elevation={4} sx={{ borderRadius: 3, p: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#6D4C41' }}>
          {/*Notre Mission*/}
          {
            getTranslation(language,"notremission")
          }
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.9, fontSize: '1rem' }}>
          {
            getTranslation(language,'missiondescription')

          }
        </Typography>
      </CardContent>
    </Card>
  </Grid>
</Grid>

<Divider sx={{ my: 8 }} />

    
        {/* Bloc Collaborateurs */}
     {/*  <Box textAlign="center" mb={4}>
          <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#6D4C41' }}>
            Nos Collaborateurs
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {collaborators.map((collab, index) => {
            const image = imageModules[collab.file];
            return (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Box
                  component="img"
                  src={image}
                  alt={collab.name}
                  sx={{
                    width: '100%',
                    height: 200,
                    borderRadius: 2,
                    objectFit: 'cover',
                    boxShadow: 3,
                  }}
                />
              </Grid>
            );
          })}
        </Grid> 
*/}

        {/* Témoignages Clients */}
     {/*  <Box textAlign="center" mt={10} mb={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#6D4C41' }}>
            Ce que nos clients disent
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={4}>
            Leur satisfaction est notre plus grande fierté.
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Card elevation={2} sx={{ p: 3 }}>
                <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                  “Une équipe à l’écoute, un rendu magnifique. Merci NTBM pour ce superbe agencement !”
                </Typography>
                <Typography variant="subtitle2" mt={2}>
                  — Mme Dupont, Stylletx (Mall of Sfax)
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
        */}

        {/* CTA final */}
        <Box textAlign="center" mt={10}>
          <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#6D4C41' }}>
            {/*Vous avez un projet ?*/}
            {
              getTranslation(language,"vousavezunprojet")
            }
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2}>
           {/*Contactez-nous pour un devis gratuit ou une étude personnalisée.*/} 
           {
            getTranslation(language,"contactdescription")
           }
          </Typography>
          <Button variant="contained" size="large" href="/contact" sx={{ mt: 2, backgroundColor: '#4E342E' }}>
            {/*Nous Contacter*/}
            {
              getTranslation(language,"nouscontacter")
            }
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Apropos;