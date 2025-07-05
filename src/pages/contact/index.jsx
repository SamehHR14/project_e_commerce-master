import { Box, Typography, Container, TextField, Button, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { memo, useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HeaderCategory from 'components/swiperSlide/headerCategory';
import { useTranslation } from 'react-i18next';

const bannerImage = "/assets/home2.jpg";
const contactImage = "/assets/contact-side-image.jpg";

const ContactBanner = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '76vh',
  backgroundImage: `url(${bannerImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  margin: 0,
  padding: 0,
  position: 'relative',
  left: '50%',
  right: '50%',
  marginLeft: '-50vw',
  marginRight: '-50vw',
}));

const ContactContainer = styled(Container)(({ theme }) => ({
  py: 10,
  textAlign: 'center',
  background: 'linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)',
  position: 'relative',
  zIndex: 2,
  mt: '-50px',
}));

const ContactCard = styled(Card)(({ theme }) => ({
  borderRadius: 12,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2.5),
  '& .MuiInputBase-input::placeholder': {
    color: '#666',
    opacity: 1,
    fontSize: '0.9rem',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: '#ccc',
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottomColor: '#999',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#000',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#caac71',
  color: '#fff',
  textTransform: 'uppercase',
  padding: '12px 30px',
  fontWeight: 'bold',
  borderRadius: theme.shape.borderRadius,
  fontSize: '0.9rem',
  '&:hover': {
    backgroundColor: '#b3955b',
  },
}));


const ContactPages = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Le nom est requis.';
    if (!formData.email.trim()) {
      tempErrors.email = 'L\'email est requis.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'L\'email n\'est pas valide.';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Le sujet est requis.';
    if (!formData.message.trim()) tempErrors.message = 'Le message est requis.';
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      setSubmitStatus('Message envoyé avec succès!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setErrors(validationErrors);
      setSubmitStatus('Veuillez corriger les erreurs.');
    }
  };

  return (
    <Box>
      {/* Banner Section - Reste inchangée 
      <ContactBanner>
        <Box sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          p: 4,
          borderRadius: 2,
          textAlign: 'center',
          zIndex: 2,
        }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: '#fff',
              fontSize: '2.5rem',
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}
          >
            Contactez-nous
          </Typography>
        </Box>
      </ContactBanner>
      */}
       <HeaderCategory  withoutTitle/>

      {/* Content Section */}
      <ContactContainer component="form" onSubmit={handleSubmit}>
        <Typography
          variant="body1"
          sx={{
            mb: 8,
            color: '#000',
            fontSize: '1rem',
            maxWidth: '700px',
            mx: 'auto',
            lineHeight: 1.8,
            fontWeight: 400,
          }}
        >
         
         Nous sommes ravis de vous accompagner. Posez vos questions ou envoyez-nous un message via le formulaire, ou contactez-nous directement.
       
        </Typography>

        <Grid container spacing={6} justifyContent="center" alignItems="stretch"> {/* justifyContent="center" est déjà là */}
          {/* Contact Form - MODIFIÉ POUR LA TAILLE ET LE CENTRAGE */}
         <Grid item xs={12} md={8}> {/* Largeur augmentée */}
  <ContactCard sx={{ p: 3, height: '100%' }}>
    <CardContent sx={{ display: 'flex', flexDirection: 'column', padding: '0 !important' }}>
      <Typography
        variant="h5"
        sx={{
          mb: 4,
          color: '#000',
          fontWeight: 'bold',
          fontSize: '2rem',
          textAlign: 'center'
        }}
      >
        Nous contacter
      </Typography>
      <StyledTextField
        name="name"
        placeholder="NOM *"
        variant="standard"
        fullWidth
        required
        value={formData.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        InputLabelProps={{ shrink: false }}
      />
      <StyledTextField
        name="email"
        placeholder="EMAIL *"
        variant="standard"
        fullWidth
        required
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        InputLabelProps={{ shrink: false }}
      />
      <StyledTextField
        name="subject"
        placeholder="SUJET"
        variant="standard"
        fullWidth
        required
        value={formData.subject}
        onChange={handleChange}
        error={!!errors.subject}
        helperText={errors.subject}
        InputLabelProps={{ shrink: false }}
      />
      <StyledTextField
        name="message"
        placeholder="MESSAGE"
        variant="standard"
        fullWidth
        required
        multiline
        rows={3}
        value={formData.message}
        onChange={handleChange}
        error={!!errors.message}
        helperText={errors.message}
        InputLabelProps={{ shrink: false }}
      />

      {/* BOUTON CENTRÉ */}
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
        <StyledButton type="submit">
          SOUMETTRE
        </StyledButton>
      </Box>

      {submitStatus && (
        <Typography
          variant="body2"
          sx={{
            mt: 2,
            color: Object.keys(errors).length ? '#d32f2f' : '#2e7d32',
            textAlign: 'center'
          }}
        >
          {submitStatus}
        </Typography>
      )}
    </CardContent>
  </ContactCard>
</Grid>
        </Grid>
      </ContactContainer>
    </Box>
  );
};

export default memo(ContactPages);