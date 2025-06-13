import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from '@mui/material';

function About() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Section Héro / Image de fond "Qui sommes-nous ?" */}
      <Box
        sx={{
          width: '100vw', // Full viewport width
          height: '76vh', // Matches the Home page banner height
          backgroundImage: "url('/assets/2.jpg')", // Use the same image as provided
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
          padding: 0,
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          overflow: 'hidden',
        }}
      >
        {/* Overlay sombre pour lisibilité */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        />

        {/* Contenu textuel de la section "Qui sommes-nous ?" */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 10,
            color: '#fff',
            textAlign: 'center',
            px: { xs: 2, md: 4 },
            pt: { xs: 5, md: 8 },
            pb: 2,
            maxWidth: '2xl',
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: '2.25rem', md: '3rem' }, fontWeight: 'semibold', mb: 3 }}>
            Qui sommes-nous ?
          </Typography>
          <Typography variant="body1">
            <Box component="span" sx={{ color: '#e59866', fontWeight: 'bold' }}>
              NTBM
            </Box>
            , <Box component="span" fontWeight="bold">Nouvelles Techniques de Bois et de Métaux</Box>.
          </Typography>
        </Box>
      </Box>

      {/* NOUVELLE SECTION : À PROPOS de la société (moderne) */}
      <Container sx={{ py: 8, px: 2 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{ fontSize: '2rem', fontWeight: 'bold', color: '#e59866', mb: 4 }}
        >
          A PROPOS
        </Typography>
        <Paper elevation={3} sx={{ p: { xs: 2, md: 3, lg: 4 }, borderRadius: 2 }}>
          <Typography
            variant="body1"
            align="center"
            sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, color: '#424242', mb: 4 }}
          >
            La société NTBM (Nouvelles Techniques de Bois et de Métaux), basée à Sfax, est spécialisée dans la conception de cuisines sur mesure et l’agencement d’espaces intérieurs. Forte de son savoir-faire, NTBM propose des solutions personnalisées alliant bois et métal pour les particuliers et les professionnels.
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4, justifyContent: 'center' }}>
            <Grid item xs={12} md={4} textAlign="center">
              <Typography variant="h3" sx={{ fontSize: '3rem', color: '#e59866', fontWeight: 'bold' }}>
                7+
              </Typography>
              <Typography variant="subtitle2" sx={{ mt: 1 }}>
                Années d'expérience
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center">
              <Typography variant="h3" sx={{ fontSize: '3rem', color: '#e59866', fontWeight: 'bold' }}>
                150+
              </Typography>
              <Typography variant="subtitle2" sx={{ mt: 1 }}>
                Projets Réalisés
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center">
              <Typography variant="h3" sx={{ fontSize: '3rem', color: '#e59866', fontWeight: 'bold' }}>
                Satisfait
              </Typography>
              <Typography variant="subtitle2" sx={{ mt: 1 }}>
                Clients Heureux
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      {/* Ancienne section "Nos Valeurs Clés" ou un autre contenu */}
      <Container sx={{ py: 6, px: 2 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2, my: 4 }}>
          <Typography
            variant="h3"
            align="center"
            sx={{ fontSize: '1.875rem', fontWeight: 'bold', mb: 4 }}
          >
            Nos Valeurs Clés
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4} textAlign="center">
              <Box sx={{ mb: 2 }}>
                <svg height="48" width="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{ color: '#3b82f6' }}>
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Box>
              <Typography variant="h6" sx={{ mb: 2 }}>Qualité Inégalée</Typography>
              <Typography color="text.secondary">
                Nous nous engageons à n'utiliser que les meilleurs matériaux et un artisanat impeccable.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center">
              <Box sx={{ mb: 2 }}>
                <svg height="48" width="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{ color: '#22c55e' }}>
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </Box>
              <Typography variant="h6" sx={{ mb: 2 }}>Durabilité</Typography>
              <Typography color="text.secondary">
                Nos meubles sont construits pour durer, réduisant ainsi votre empreinte environnementale.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center">
              <Box sx={{ mb: 2 }}>
                <svg height="48" width="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{ color: '#8b5cf6' }}>
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m7 0V5a2 2 0 012-2h2a2 2 0 012 2v6m-4 0a2 2 0 002 2h2a2 2 0 002-2m-8 0v6m-4-6v6" />
                </svg>
              </Box>
              <Typography variant="h6" sx={{ mb: 2 }}>Design Innovant</Typography>
              <Typography color="text.secondary">
                Des designs modernes et intemporels qui s'adaptent à tous les intérieurs.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default About;