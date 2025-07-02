import {
  Box,
  Grid,
  Typography,
  Divider,
  IconButton,
  Link,
  Container
} from '@mui/material';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <Box
      sx={{
        width: '100vw',
        backgroundColor: '#F9F7F1',
        color: '#333',
        py: 2,
        overflowX: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Grid container textAlign={{ xs: 'center', md: 'left' }} spacing={2}>
          {/* Email & Téléphones */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: 'Playfair Display, serif',
                fontStyle: 'italic',
                fontWeight: 600,
                fontSize: '1.1rem',
                color: '#5D4037'
              }}
            >
              Email
            </Typography>
            <Link
              href="mailto:info@ntbm.com.tn"
              underline="hover"
              color="inherit"
            >
              <Typography variant="body2">info@ntbm.com.tn</Typography>
            </Link>

            <Typography
              variant="subtitle1"
              sx={{
                mt: 1.5,
                fontFamily: 'Playfair Display, serif',
                fontStyle: 'italic',
                fontWeight: 600,
                fontSize: '1.1rem',
                color: '#5D4037'
              }}
            >
              Téléphones
            </Typography>
           
              <Typography variant="body2">+216 28 26 22 62</Typography>
          </Grid>

          {/* Adresse */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: 'Playfair Display, serif',
                fontStyle: 'italic',
                fontWeight: 600,
                fontSize: '1.1rem',
                color: '#5D4037'
              }}
            >
              Adresse
            </Typography>
            <Link
              href="https://www.google.com/maps?q=Route+Teniour+KM+9+Immeuble+Derbel,+Sfax"
              target="_blank"
              rel="noopener"
              underline="hover"
              color="inherit"
            >
              <Typography variant="body2">
                Route Teniour KM 9<br />
                Immeuble Derbel, Sfax
              </Typography>
            </Link>
          </Grid>

          {/* Réseaux sociaux */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: 'Playfair Display, serif',
                fontStyle: 'italic',
                fontWeight: 600,
                fontSize: '1.1rem',
                color: '#5D4037'
              }}
            >
              Suivez-nous :
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
                gap: 1,
                mt: 1
              }}
            >
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

        <Divider sx={{ my: 1, borderColor: 'rgba(0,0,0,0.1)' }} />

        <Typography
          variant="caption"
          align="center"
          display="block"
          color="textSecondary"
          sx={{ mt: 1 }}
        >
          © 2025 Meubles NTBM – Tous droits réservés.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
