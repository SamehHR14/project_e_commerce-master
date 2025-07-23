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
import CustomImageUpload from 'components/form/imageUpload';
import {
  useCreateOrUpdateCategory,
  useDeleteCategoryImage,
  useDeleteCategory,
  useGetCategorieById,
} from 'services/hooks/category';

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// === Styles ===
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

// === Validation ===
const validationSchema = Yup.object({
  name: Yup.string().required('Le nom est requis'),
});

const CategoryForm = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const { id } = useParams();
  const navigate = useNavigate();

  const { createOrUpdateCategory } = useCreateOrUpdateCategory();
  const { getCategorie, categorie } = useGetCategorieById();
  const { deleteCategoryImage } = useDeleteCategoryImage();
  const { deleteCategory } = useDeleteCategory();

  const [initForm, setInitForm] = useState({
    name: '',
    webMetaTitle: '',
    image: null,
  });

  useEffect(() => {
    if (id) getCategorie(id);
  }, [id]);

  useEffect(() => {
    if (categorie) {
      setInitForm({
        name: categorie.name || '',
        webMetaTitle: categorie.webMetaTitle || '',
        image: typeof categorie.image === 'string' ? categorie.image : null,
      });
    }
  }, [categorie]);

  const handleDelete = async () => {
    if (window.confirm("Voulez-vous vraiment supprimer cette catégorie ?")) {
      try {
        await deleteCategory(id);
        navigate('/categories');
      } catch (err) {
        console.error("Erreur suppression catégorie :", err);
      }
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
          {`${id ? 'Modifier' : 'Ajouter'} une catégorie`}
        </Typography>

        <Formik
          initialValues={initForm}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={createOrUpdateCategory}
        >
          {({ setFieldValue, values }) => (
            <Form>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <CustomTextField name="name" label="Nom de la catégorie" />
                </Grid>

                <Grid item xs={12}>
                  <CustomImageUpload
                    name="image"
                    onlyOneImage
                    label="Image de la catégorie"
                    onDelete={(e, callback) => {
                      const isUrl = typeof values.image === 'string';
                      if (isUrl) {
                        setFieldValue('image', null);
                        callback();
                      } else {
                        deleteCategoryImage(id).then(() => {
                          setFieldValue('image', null);
                          callback();
                        });
                      }
                    }}
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
                  <StyledButton type="submit" fullWidth>
                    Enregistrer
                  </StyledButton>
                </Grid>

                {id && (
                  <Grid item xs={12}>
                    <Button
                      variant="outlined"
                      color="error"
                      fullWidth
                      onClick={handleDelete}
                      sx={{ mt: 2 }}
                    >
                      Supprimer la catégorie
                    </Button>
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

export default CategoryForm;
