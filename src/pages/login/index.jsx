  
  import { useTranslation } from 'react-i18next';
  import {
    Box,
    Typography,
    Container,
    Grid,
    Button,
    Paper,
    useMediaQuery,
    useTheme,
    IconButton,
    InputAdornment,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import CustomTextField from 'components/form/input'; // يجب أن يدعم InputProps

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAuth } from 'context/AuthContext';
import { useNavigate } from 'react-router-dom';

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(6),
    borderRadius: 18,
    boxShadow: '0 14px 38px rgba(0, 0, 0, 0.06)',
    backgroundColor: '#fff',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#caac71',
    color: '#fff',
    padding: theme.spacing(1.5, 3),
    borderRadius: 10,
    fontWeight: 600,
    fontSize: '1rem',
    textTransform: 'none',
    letterSpacing: '0.5px',
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: '#b3955b',
        transform: 'translateY(-1px)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    },
}));

// Validation
const validationSchema = Yup.object({
    email: Yup.string().email('Email invalide').required('Email requis'),
   // password: Yup.string().min(6, 'Mot de passe trop court').required('Mot de passe requis'),
});

const LoginForm = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const { isAuth,
    login,
    } = useAuth();
      const navigate = useNavigate();  
    const [showPassword, setShowPassword] = useState(false);
const initForm = {
        email: '',
        password: '',
    };
    
useEffect(() => {
    if (isAuth) {
        navigate('/');
    }
}, [isAuth, navigate]);
    
    return (
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
            <StyledPaper>
                <Typography
                    variant={isSmall ? 'h5' : 'h4'}
                    align="center"
                    gutterBottom
                    fontWeight="bold"
                    color="text.primary"
                >
                    Connexion
                </Typography>

                <Formik
                    initialValues={initForm}
                    validationSchema={validationSchema}
                    enableReinitialize
                    onSubmit={login}
                >
                    {() => (
                        <Form>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <CustomTextField name="email" label="Email" />
                                </Grid>

                                <Grid item xs={12}>
                                    <CustomTextField
                                        name="password"
                                        label="Mot de passe"
                                        type={showPassword ? 'text' : 'password'}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={() => setShowPassword(prev => !prev)}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <StyledButton type="submit" fullWidth>
                                        Se connecter
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </StyledPaper>
        </Container>
    );
};

export default LoginForm;
