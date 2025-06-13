import { Box, Grid, Typography, Divider, IconButton, Link, Container } from '@mui/material'; // Import de Container
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    // Box externe avec une largeur de 100vw et sans padding horizontal direct ici
    // overflowX: 'hidden' est important pour éviter une barre de défilement horizontale si le contenu dépasse
    <Box sx={{ width: '100vw', backgroundColor: '#d9d7d2', color: '#333', py: 4, overflowX: 'hidden' }}>
      {/* Container pour le contenu du footer, qui gérera la largeur et le padding */}
      {/* maxWidth="lg" aligne le contenu avec un container de largeur 'lg' (par défaut 1280px sur les grands écrans avec des marges) */}
      <Container maxWidth="lg">
        <Grid container textAlign={{ xs: 'center', md: 'left' }} justifyContent="left">
          {/* Email & Téléphones */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" fontWeight={600} sx={{ color: '#4E342E' }}>Email</Typography>
            <Link href="mailto:ntbm.decore@gmail.com" underline="hover" color="inherit">
              <Typography variant="body2" sx={{ mt: 1 }}>
                ntbm.decore@gmail.com
              </Typography>
            </Link>

            <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2, color: '#4E342E' }}>
              Téléphones
            </Typography>
            <Link href="tel:+21628262262" underline="hover" color="inherit">
              <Typography variant="body2">+216 28 26 22 62</Typography>
            </Link>
            <Link href="tel:+21670310420" underline="hover" color="inherit">
              <Typography variant="body2">+216 70 31 04 20</Typography>
            </Link>
          </Grid>

          {/* Adresse */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" fontWeight={600} sx={{ color: '#4E342E' }}>Adresse</Typography>
            <Link
              href="https://www.google.com/maps?q=Route+Teniour+KM+9+Immeuble+Derbel,+Sfax"
              target="_blank"
              rel="noopener"
              underline="hover"
              color="inherit"
            >
              <Typography variant="body2" sx={{ mt: 1 }}>
                Route Teniour KM 9<br />
                Immeuble Derbel, Sfax
              </Typography>
            </Link>
          </Grid>

          {/* Réseaux sociaux */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" fontWeight={600} sx={{ color: '#4E342E' }}>Suivez-nous :</Typography>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 1.5, mt: 1.5 }}>
              <IconButton
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener"
                sx={{ color: '#4267B2' }}
                aria-label="Facebook"
              >
                <FaFacebook />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener"
                sx={{ color: '#0077b5' }}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener"
                sx={{ color: '#C13584' }}
                aria-label="Instagram"
              >
                <FaInstagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: 'rgba(0,0,0,0.1)' }} />
        <Typography variant="caption" align="center" display="block" color="textSecondary">
          © 2025 Meubles NTBM – Tous droits réservés.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;