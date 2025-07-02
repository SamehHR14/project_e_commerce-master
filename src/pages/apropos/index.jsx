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
import { useTranslation } from 'react-i18next';

// Fonction pour importer dynamiquement les images
function importAll(r) {
  const images = {};
  r.keys().forEach((key) => (images[key.replace('./', '')] = r(key)));
  return images;
}

const imageModules = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

// Liste des collaborateurs (sans doublon)
const collaborators = [
  { file: 'henniCollection.jpg', name: 'Henni Collection' },
  { file: 'mall sfax.jpg', name: 'Mall Sfax' },
  { file: 'nouveauPartenaire.png', name: 'Partenaire Tunisie' },
];

const Apropos = () => {
  return (
    <>
      <HeaderCategory withoutTitle />

    
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Titre principal */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: '#4E342E' }}>
            À propos
          </Typography>
          <Typography variant="h6" color="text.secondary" maxWidth="md" mx="auto">
            Design, tradition & écoresponsabilité — un savoir-faire au service de vos espaces.
          </Typography>
        </Box>

        {/* Bloc Histoire */}
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Card elevation={4} sx={{ borderRadius: 3, p: 2 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#6D4C41' }}>
                  Notre Histoire
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  <strong>NTBM</strong> (Nouvelles Techniques de Bois et de Métaux), basée à <strong>Sfax – Tunisie</strong>,
                  est spécialisée dans la <strong>cuisine sur mesure</strong> et l’<strong>agencement d’espaces clés en main</strong>.
                  <br /><br />
                  Magasins, bureaux ou espaces résidentiels : notre savoir-faire allie design, qualité artisanale et innovation.
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
    <Card elevation={4} sx={{ borderRadius: 3, p: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#6D4C41' }}>
          Notre Mission
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.9, fontSize: '1rem' }}>
          Chez <strong>NTBM</strong>, notre mission est claire : créer des espaces qui allient esthétisme,
          fonctionnalité et durabilité. Nous croyons qu’un bon design ne se contente pas d’être beau —
          il doit aussi améliorer le quotidien.
          <br /><br />
          De la conception à la réalisation, chaque projet est pensé sur mesure, avec une attention
          particulière portée aux détails, aux matériaux et aux attentes de nos clients. Notre ambition ?
          Vous offrir un intérieur qui vous ressemble, conçu pour durer.
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
            Vous avez un projet ?
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2}>
            Contactez-nous pour un devis gratuit ou une étude personnalisée.
          </Typography>
          <Button variant="contained" size="large" href="/contact" sx={{ mt: 2, backgroundColor: '#4E342E' }}>
            Nous Contacter
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Apropos;
