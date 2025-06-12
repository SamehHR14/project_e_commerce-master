import { Box, Typography, Button, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { memo } from 'react'; // Pas besoin de useState si les boutons sont toujours visibles
import { Link as RouterLink } from 'react-router-dom'; // Importez RouterLink pour la navigation

const bannerImage = "/assets/home.webp"; // Assurez-vous que le chemin de l'image est correct.

// Mettez à jour vos catégories avec des chemins React Router cohérents
const categories = [
  { title: 'Meubles TV', image: '/images/tv.jpg', path: '/categories/meubles-tv' },
  { title: 'Tables basses', image: '/images/table.jpg', path: '/categories/tables-basses' },
  { title: 'Buffets', image: '/images/buffet.jpg', path: '/categories/buffets' },
  { title: 'Lits', image: '/images/bed.jpg', path: '/categories/lits' },
  { title: 'Cabinet Médical', image: '/assets/table.jpg', path: '/categories/cabinet-medical' }, // Renommé pour la lisibilité
];

// Le composant stylisé pour la bannière qui s'étend sur toute la largeur

const FullWidthBanner = styled(Box)(({ theme }) => ({
  width: '100vw', // Ensure it takes the full viewport width
  height: '76vh', // Full viewport height
  backgroundImage: `url(${bannerImage})`,
  backgroundSize: 'cover',       // Ensures the image covers the entire area
  backgroundPosition: 'center',  // Centers the image
  backgroundRepeat: 'no-repeat', // Prevents image repetition
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  // Add this to remove any default margin or padding from the body
  margin: 0,
  padding: 0,
  // Ensure it overrides any parent container constraints
  position: 'relative',
  left: '50%',
  right: '50%',
  marginLeft: '-50vw',
  marginRight: '-50vw',
}));

const HomePages = () => {
  // Suppression de showButtons et handleImageClick car le bouton sera toujours visible
  // const [showButtons, setShowButtons] = useState({});
  // const handleImageClick = (index) => { ... };

  return (
    <Box>
      <FullWidthBanner>
        <Box sx={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          p: 4,
          borderRadius: 2,
          textAlign: 'center',
        }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            NTBM
          </Typography>
        </Box>
      </FullWidthBanner>

      <Container sx={{ py: 8 }}>
        <Typography variant="h5" sx={{ mb: 2, textAlign: 'center', color: '#000', fontSize: '1.75rem', fontWeight: 700 }}>
          Les Catégories
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 6, textAlign: 'center', color: '#666', fontSize: '1.1rem', maxWidth: '600px', mx: 'auto', lineHeight: 1.6 }}>
          Des meubles imaginés et conçus pour vous accompagner longtemps
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={2} key={index}> {/* Utilisation de md={2} pour 6 colonnes par ligne */}
              <Card sx={{
                borderRadius: 0,
                boxShadow: 0,
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#fff',
                display: 'flex', // Utilise flex pour aligner le contenu de la carte
                flexDirection: 'column',
                height: '100%', // S'assure que toutes les cartes ont la même hauteur
              }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={category.image}
                  alt={category.title}
                  // onClick={() => handleImageClick(index)} // Supprimé
                  style={{ cursor: 'pointer', objectFit: 'cover' }}
                />
                <CardContent sx={{ p: 2, textAlign: 'center', pt: 0, pb: 1, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Typography variant="h6" sx={{ color: '#000', fontWeight: 600, mb: 1, fontSize: '1.2rem' }}>
                    {category.title}
                  </Typography>
                  {/* Le bouton "Découvrir" est maintenant toujours visible */}
                  <Button
                    variant="contained"
                    component={RouterLink} // Utilise RouterLink pour la navigation
                    to={category.path}    // Pointe vers le chemin de la catégorie
                    sx={{
                      backgroundColor: '#000',
                      color: '#fff',
                      textTransform: 'none',
                      padding: '8px 24px',
                      '&:hover': { backgroundColor: '#333' },
                      mt: 'auto', // Pousse le bouton vers le bas de la CardContent
                    }}
                  >
                    Découvrir
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default memo(HomePages);