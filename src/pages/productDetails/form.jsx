import {
  Typography,
  Container,
  Grid,
  Button,
  Paper,
  useMediaQuery,
  useTheme,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import CustomTextField from 'components/form/input';
import CustomSelect from 'components/form/select';
import CustomImageUpload from 'components/form/imageUpload';
import EditorDraft from 'components/form/richTextEditor';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useGetAllCategories } from 'services/hooks/category';
import { useCreateOrUpdateProduct } from 'services/hooks/products';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

// ⬛ Paper Styling
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  borderRadius: 18,
  boxShadow: '0 14px 38px rgba(0, 0, 0, 0.06)',
  backgroundColor: '#fff',
}));

// 🟨 Button Styling
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

// ✅ Validation Schema
const validationSchema = Yup.object({
  name: Yup.string().required('Le nom est requis'),
  description: Yup.string().required('La description est requise'),
  categoryId: Yup.string().required('La catégorie est requise'),
  images: Yup.array().min(1, 'Veuillez ajouter au moins une image'),
});

const ProductForm = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const { id } = useParams();
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    name: '',
    description: '<p></p>',
    webMetaDescription: '',
    webMetaTitle: '',
    categoryId: '',
    images: [],
  });

  const { createOrUpdateProduct, product } = useCreateOrUpdateProduct();
  const { getAllCategories, categories } = useGetAllCategories();

  useEffect(() => {
    getAllCategories();
  }, []);

  // Remplir le formulaire en mode édition
  useEffect(() => {
    if (id && product) {
      setInitialValues({
        name: product.name || '',
        description: product.description || '<p></p>',
        webMetaDescription: product.webMetaDescription || '',
        webMetaTitle: product.webMetaTitle || '',
        categoryId: product.categoryId || '',
        images: product.images || [],
      });
    }
  }, [id, product]);

  useEffect(() => {
    if (product?.id || id) navigate(`/productForm/${product?.id || id}`);
  }, [product, id]);

  //  Fonction de suppression
  const handleDelete = async () => {
    const confirmDelete = window.confirm('Voulez-vous vraiment supprimer ce produit ?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);
      alert('Produit supprimé avec succès.');
      navigate('/'); // Redirige vers la liste des produits après suppression
    } catch (error) {
      console.error('Erreur de suppression:', error);
      alert('Erreur lors de la suppression du produit.');
    }
  };

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
          {id ? 'Modifier un produit' : 'Ajouter un produit'}
        </Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={createOrUpdateProduct}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <CustomTextField name="name" label="Nom du produit" />
                </Grid>

                <Grid item xs={12} md={6}>
                  <CustomSelect
                    name="categoryId"
                    label="Catégorie"
                    options={categories.map((categorie) => ({
                      value: categorie.id,
                      label: categorie.name,
                    }))}
                  />
                </Grid>

                <Grid item xs={12}>
                  <CustomImageUpload
                    name="images"
                    label="Images du produit"
                    replaceOnEdit={Boolean(id)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <CustomTextField
                    name="shortDescription"
                    multiline
                    rows={3}
                    label="Description courte"
                    placeholder="Saisir une brève description du produit"
                  />
                </Grid>

                <Grid item xs={12}>
                  <CustomTextField
                    name="webMetaTitle"
                    multiline
                    rows={4}
                    label="Meta titre"
                    placeholder="Saisir le titre SEO de la page"
                  />
                </Grid>

                <Grid item xs={12}>
                  <CustomTextField
                    name="webMetaDescription"
                    multiline
                    rows={4}
                    label="Meta description"
                    placeholder="Saisir la description SEO de la page"
                  />
                </Grid>

                <Grid item xs={12}>
                  <EditorDraft
                    name="description"
                    handleChange={(value) => setFieldValue('description', value)}
                    defaultValue={values.description}
                    placeholder="Saisir la description"
                  />
                </Grid>

                <Grid item xs={12}>
                  <StyledButton type="submit" fullWidth>
                    Enregistrer
                  </StyledButton>
                </Grid>

                {/* Bouton Supprimer avec icône, visible uniquement en mode édition */}
                {id && (
                  <Grid item xs={12}>
                    <StyledButton
                      fullWidth
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={handleDelete}
                      sx={{
                        backgroundColor: '#f44336',
                        color: '#fff',
                        '&:hover': {
                          backgroundColor: '#d32f2f',
                        },
                      }}
                    >
                      Supprimer le produit
                    </StyledButton>
                  </Grid>
                )}
              </Grid>
            </Form>
          )}
        </Formik>
      </StyledPaper>
    </Container>
  );
};

export default ProductForm;
