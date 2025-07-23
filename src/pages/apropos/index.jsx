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
  Button
} from '@mui/material';
import {
  CalendarMonth,
  Place,
  CheckCircle,
  ThumbUp,
  DesignServices,
  WorkspacePremium
} from '@mui/icons-material';
import HeaderCategory from 'components/swiperSlide/headerCategory';
import { getTranslation } from 'utils';
import { useAuth } from 'context/AuthContext';

const testimonials = [
  {
    quote: "Une équipe à l’écoute, un rendu magnifique. Merci NTBM pour ce superbe agencement !",
    company: "Henni Collection"
  },
  {
    quote: "Professionnalisme et qualité irréprochable. Notre nouveau bureau est parfait, fonctionnel et design.",
   company: "Cabinet dentaire"
  },
];

const Apropos = () => {
  const { language } = useAuth();

  return (
    <>
      <HeaderCategory withoutTitle />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Titre */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: '#db7958ff' }}>
            {getTranslation(language, "apropos")}
          </Typography>
          <Typography variant="h6" color="text.secondary" maxWidth="md" mx="auto">
            {getTranslation(language, "aproposdescription")}
          </Typography>
        </Box>

        {/* Historique */}
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, backgroundColor: '#F7F5F3', p: 2 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" sx={{ color: '#8b4513' }}>
                  {getTranslation(language, "notrehistorique")}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                  {getTranslation(language, "descriptionHistorique")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, backgroundColor: '#F7F5F3' }}>
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

        {/* Faits clés */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: '#8b4513' }}>
            {getTranslation(language, "nosfaitscles") || "Nos Faits Clés"}
          </Typography>
          <Grid container spacing={4} justifyContent="center" mt={4}>
            <Grid item xs={12} sm={4}>
              <CalendarMonth sx={{ fontSize: 40, color: '#db7958ff', mb: 1 }} />
              <Typography variant="h6" fontWeight="bold">2009</Typography>
              <Typography variant="body2" color="text.secondary">+15 ans d'expertise</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Place sx={{ fontSize: 40, color: '#db7958ff', mb: 1 }} />
              <Typography variant="h6" fontWeight="bold">Sfax</Typography>
              <Typography variant="body2" color="text.secondary">Production 100% tunisienne</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <CheckCircle sx={{ fontSize: 40, color: '#db7958ff', mb: 1 }} />
              <Typography variant="h6" fontWeight="bold">150+ Projets</Typography>
              <Typography variant="body2" color="text.secondary">Des clients satisfaits</Typography>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 8 }} />

        {/* Mission */}
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, backgroundColor: '#F7F5F3' }}>
              <CardMedia
                component="img"
                image="/assets/1.jpg"
                alt="Notre mission"
                sx={{ borderRadius: 3, maxHeight: 300, objectFit: 'cover' }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, backgroundColor: '#F7F5F3', p: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" sx={{ color: '#8b4513' }}>
                  {getTranslation(language, "notremission")}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                  {getTranslation(language, "missiondescription")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: 8 }} />

        {/* Témoignages */}
        <Box textAlign="center" mt={10} mb={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: '#6D4C41' }}>
            {getTranslation(language, "cequenoscilentsdisent")}
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={4}>
            {getTranslation(language, "satisfactionDescription")}
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ p: 3, borderRadius: 3, backgroundColor: '#FFFDF9' }}>
                  <CardContent>
                    <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
                      “{testimonial.quote}”
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#4E342E' }}>
                      {testimonial.company}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 8 }} />

        {/* Pourquoi nous choisir */}
        <Box textAlign="center" mt={8}>
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: '#8b4513' }}>
            Pourquoi nous choisir ?
          </Typography>
          <Grid container spacing={4} mt={4}>
            <Grid item xs={12} md={4}>
              <ThumbUp sx={{ fontSize: 40, color: '#db7958ff', mb: 1 }} />
              <Typography variant="h6" fontWeight="bold">Qualité artisanale</Typography>
              <Typography variant="body2" color="text.secondary">Finitions soignées & sur-mesure</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <DesignServices sx={{ fontSize: 40, color: '#db7958ff', mb: 1 }} />
              <Typography variant="h6" fontWeight="bold">Design professionnel</Typography>
              <Typography variant="body2" color="text.secondary">Adapté aux besoins métiers</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <WorkspacePremium sx={{ fontSize: 40, color: '#db7958ff', mb: 1 }} />
              <Typography variant="h6" fontWeight="bold">Satisfaction client</Typography>
              <Typography variant="body2" color="text.secondary">Partenariat de confiance</Typography>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 8 }} />

        {/* CTA final */}
        <Box textAlign="center" mt={10}>
          <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#db7958ff' }}>
            {getTranslation(language, "vousavezunprojet")}
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2}>
            {getTranslation(language, "contactdescription")}
          </Typography>
          <Button variant="contained" size="large" href="/contact" sx={{ mt: 2, backgroundColor: '#db7958ff', '&:hover': { backgroundColor: '#6D4C41' } }}>
            {getTranslation(language, "nouscontacter")}
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Apropos;
