import { Box, Container, Grid, Typography, Divider, IconButton } from '@mui/material';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#917E6B', color: '#fff', py: 6, px: 2 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} textAlign={{ xs: 'center', md: 'left' }}>
          {/* Colonne 1 - Email & Téléphones */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={600}>
              Email
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              ntbm.decore@gmail.com
            </Typography>

            <Typography variant="h6" fontWeight={600} sx={{ mt: 3 }}>
              Téléphones
            </Typography>
            <Typography variant="body2">+216 28 26 22 62</Typography>
            <Typography variant="body2">+216 70 31 04 20</Typography>
          </Grid>

          {/* Colonne 2 - Adresse */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={600}>
              Adresse
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Route Teniour KM 9<br />
              Immeuble Derbel, Sfax
            </Typography>
          </Grid>

          {/* Colonne 3 - Réseaux sociaux */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={600}>
              Suivez-nous :
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 2, mt: 2 }}>
              <IconButton href="#" sx={{ color: '#4267B2' }} aria-label="Facebook">
                <FaFacebook />
              </IconButton>
              <IconButton href="#" sx={{ color: '#0077b5' }} aria-label="LinkedIn">
                <FaLinkedin />
              </IconButton>
              <IconButton href="#" sx={{ color: '#C13584' }} aria-label="Instagram">
                <FaInstagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Footer bas */}
        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.3)' }} />
        <Typography variant="body2" align="center">
          © 2025 Meubles NTBM – Tous droits réservés.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
