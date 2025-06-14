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
} from '@mui/material';

const Apropos = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Titre principal */}
      <Box textAlign="center" mb={8}>
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{ color: '#4E342E' }}
        >
          À propos de <Box component="span" sx={{ color: '#d9a69a' }}>NTBM</Box>
        </Typography>
        <Typography variant="h6" color="text.secondary" maxWidth="md" mx="auto">
          Design, tradition & écoresponsabilité — un savoir-faire au service de vos espaces.
        </Typography>
      </Box>

      {/* Bloc histoire + image */}
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <Card elevation={4} sx={{ borderRadius: 3, p: 2 }}>
            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: 'bold', color: '#6D4C41' }}
              >
                Notre Histoire
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                <strong>NTBM</strong> (Nouvelles Techniques de Bois et de Métaux), basée à <strong>Sfax – Tunisie</strong>,
                est spécialisée dans la <strong>cuisine sur mesure</strong> et l’<strong>agencement d’espaces clés en main</strong>.
                De la conception à la réalisation, nous transformons vos idées en intérieurs élégants, fonctionnels et durables.
                <br />
                <br />
                Magasins, bureaux ou espaces résidentiels : notre savoir-faire allie design, qualité artisanale et innovation.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={4} sx={{ borderRadius: 3 }}>
            <CardMedia
              component="img"
              height="300"
              image="/assets/2.jpg"
              alt="Atelier NTBM"
              sx={{ borderRadius: 3 }}
            />
          </Card>
        </Grid>
      </Grid>

      <Divider sx={{ my: 8 }} />

      {/* Bloc valeurs + image équipe */}
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <Card elevation={4} sx={{ borderRadius: 3 }}>
            <CardMedia
              component="img"
              height="300"
              image="/assets/2.jpg"
              alt="Équipe NTBM"
              sx={{ borderRadius: 3 }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={4} sx={{ borderRadius: 3, p: 2 }}>
            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: 'bold', color: '#6D4C41' }}
              >
                Nos Valeurs
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                L’humain est au cœur de notre entreprise. Nos artisans et designers
                collaborent pour concevoir des meubles qui allient <strong>fonctionnalité</strong> et <strong>émotion</strong>.
                <br />
                <br />
                L’<strong>innovation</strong>, le <strong>respect de la nature</strong> et la <strong>satisfaction client</strong>
                guident chacune de nos décisions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Apropos;