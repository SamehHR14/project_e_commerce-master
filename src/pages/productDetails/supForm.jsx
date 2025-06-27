import {
  Typography,
  Container,
  Grid,
  Button,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import CustomTextField from 'components/form/input';
import CustomSelect from 'components/form/select';
import { useEffect, useState } from 'react';
import { useGetAllCategories } from 'services/hooks/category';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

// ⬛ Styling
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  borderRadius: 18,
  boxShadow: '0 14px 38px rgba(0, 0, 0, 0.06)',
  backgroundColor: '#fff',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#e53935',
  color: '#fff',
  padding: theme.spacing(1.5, 3),
  borderRadius: 10,
  fontWeight: 600,
  fontSize: '1rem',
  textTransform: 'none',
  letterSpacing: '0.5px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#c62828',
    transform: 'translateY(-1px)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  },
}));

// ✅ Validation Schema
const validationSchema = Yup.object({
  id: Yup.string().required("L'identifiant du produit est requis"),
  name: Yup.string(),
  categoryId: Yup.string(),
});

const ProductDeleteForm = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const { id } = useParams();
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    id: id || '',
    name: '',
    categoryId: '',
  });

  const { getAllCategories, categories } = useGetAllCategories();

  useEffect(() => {
    getAllCategories();
  }, []);

  const handleDelete = async (values, { setSubmitting, resetForm }) => {
    const confirm = window.confirm(
      `Êtes-vous sûr de vouloir supprimer le produit avec l'ID : ${values.id} ?`
    );
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:3000/api/products/${values.id}`);
      alert('Produit supprimé avec succès ✅');
      resetForm();
      navigate('/products'); // Redirection vers la liste des produits
    } catch (error) {
      console.error('Erreur de suppression :', error.response?.data || error.message);
      alert(
        `Erreur lors de la suppression : ${error.response?.data?.message || error.message}`
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: { xs: 6, md: 10 } }}>
      <StyledPaper>
        <Typography
          variant={isSmall ? 'h5' : 'h4'}
          align="center"
          gutterBottom
          fontWeight="bold"
        >
          Supprimer un produit
        </Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={handleDelete}
        >
          {({ isSubmitting }) => (
            <Form>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <CustomTextField name="id" label="ID du produit" disabled />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField name="name" label="Nom du produit" placeholder="Nom facultatif" />
                </Grid>
                <Grid item xs={12}>
                  <CustomSelect
                    name="categoryId"
                    label="Catégorie"
                    options={categories.map((cat) => ({
                      value: cat.id,
                      label: cat.name,
                    }))}
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledButton type="submit" fullWidth disabled={isSubmitting}>
                    Supprimer
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

export default ProductDeleteForm;
