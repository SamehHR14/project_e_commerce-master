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
import { useCreateOrUpdateProduct, useDeleteProduct, useDeleteProductImage, useGetProductById } from 'services/hooks/products';
import DeleteIcon from '@mui/icons-material/Delete';

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

  const { createOrUpdateProduct } = useCreateOrUpdateProduct();
  const { getAllCategories, categories } = useGetAllCategories();
  const { deleteProduct } = useDeleteProduct();
  const { deleteProductImage } = useDeleteProductImage();
 const {
        getProduct,
        product
    } = useGetProductById();

  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(() => {
    if (product)setInitialValues(product)
  }, [product?.id]);

useEffect(()=>{
if(id){
getProduct(id)
}
},[id])

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
                    onDelete={(index,callback) => {
                      let copy = [...(values?.images || [])];
                      if (!copy?.[index]?.id) {
                        copy[index] = null;
                        setFieldValue('images', copy.filter(item => !!item));
                        callback();
                      } else
                        deleteProductImage(copy?.[index]?.id).then(({ data }) => {
                        setFieldValue('images', (data?.images || []));
                        callback();
                        })
                    }}
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
                      onClick={() => deleteProduct(id).then(() => {

                        setTimeout(() => {
                          navigate(`/`);
                        }, 300)
                      })}
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
