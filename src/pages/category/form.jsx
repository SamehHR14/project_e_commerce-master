import {
    Box,
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
import { useTranslation } from 'react-i18next';

import CustomTextField from 'components/form/input';
import CustomImageUpload from 'components/form/imageUpload';
import { useCreateOrUpdateCategory, useDeleteCategoryImage, useGetCategorieById } from 'services/hooks/category';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

//  Paper Styling
const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(6),
    borderRadius: 18,
    boxShadow: '0 14px 38px rgba(0, 0, 0, 0.06)',
    backgroundColor: '#fff',
}));

// Button Styling
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

// Validation Schema
const validationSchema = Yup.object({
    name: Yup.string().required('Le nom est requis'),
});

// Main Form Component
const CategoryForm = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    let { id } = useParams();
    const {
        createOrUpdateCategory
    } = useCreateOrUpdateCategory();
    const {
        getCategorie,
        categorie
    } = useGetCategorieById();
    const [initForm, setInitForm] = useState({
        name: '',
        webMetaTitle: '',
        image: null,
    });

    const {
        deleteCategoryImage,
    } = useDeleteCategoryImage();
    useEffect(() => {
        if (id)
            getCategorie(id);
    }, [id])
    useEffect(() => {
        if (categorie)
            setInitForm(categorie);
    }, [categorie])

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
                                        label="Images du produit"
                                        onDelete={(e,callback) => {
                                            let copy = values?.image;
                                            if (typeof copy === 'string') {
                                                setFieldValue('image', null);
                                                callback()
                                            } else
                                                deleteCategoryImage(id).then(() => {
                                                    setFieldValue('image', null);
                                                callback()
                                                })
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
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </StyledPaper>
        </Container>
    );
};

export default CategoryForm;
