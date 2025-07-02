import { Box, Typography, Container, Button, Grid } from '@mui/material';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

// Import images if in src folder
import tv6 from '../../images/tv6.png';
import tv7 from '../../images/tv7.png';
import tv from '../../images/tv.png';

const CarouselContainer = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  marginTop: '20px',
});

const CarouselTrack = styled(Box)({
  display: 'flex',
  transition: 'transform 0.5s ease',
  '& > *': {
    flex: '0 0 auto',
    width: '150px',
    marginRight: '10px',
  },
});

const CarouselImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '4px',
  objectFit: 'cover',
});

const CarouselButton = styled(Button)({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
});

const ProductImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: 4,
});

const ProductDetails = () => {
  const { name } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  if (!product) {
    return <Typography>No product details available.</Typography>;
  }

  const productCarouselImages = [
    { src: product.image, alt: `${product.title} - View 1` },
    { src: tv6, alt: `${product.title} - View 2` },
    { src: tv7, alt: `${product.title} - View 3` },
    
  ];

  const handlePrev = () => {
    const track = document.querySelector('.carousel-track');
    track.scrollLeft -= 160;
  };

  const handleNext = () => {
    const track = document.querySelector('.carousel-track');
    track.scrollLeft += 160;
  };

  return (
    <Container sx={{ py: 8 }}>
      <Button onClick={() => navigate(-1)} sx={{ mb: 4 }}>
        Back
      </Button>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ProductImage src={product.image} alt={product.title} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            {product.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            This is a detailed description of the product.
          </Typography>
          
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
        </Grid>
        <Grid item xs={12}>
          <CarouselContainer>
            <CarouselButton onClick={handlePrev} sx={{ left: '10px' }}>
              
            </CarouselButton>
            <CarouselTrack className="carousel-track">
              {productCarouselImages.map((image, index) => (
                <Box key={index}>
                  <CarouselImage src={image.src} alt={image.alt} />
                </Box>
              ))}
            </CarouselTrack>
            <CarouselButton onClick={handleNext} sx={{ right: '10px' }}>
              
            </CarouselButton>
          </CarouselContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;