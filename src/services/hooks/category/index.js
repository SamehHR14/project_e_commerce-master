import { useLoadingContext } from "context/LoadingContext";
import { useState } from "react";
import { objectToFormData } from "utils";
import { useHandlerErrors } from "..";
import { useTranslation } from 'react-i18next';

 
export const useGetCategorieById = ()=>{
const {setLoading} = useLoadingContext();

const {onSuccess,onError} = useHandlerErrors();
    const [categorie,setCategorie] = useState(null);
      
        const getCategorie = async (id) => {
            try {
              setLoading((old)=>old + 1);
              const response = await fetch(`${process.env.REACT_APP_API_URL}/api/categories/${id}`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`
                }
              });
              if (response.ok) {
                const data = await response.json();
                setCategorie(data);
              }
            } catch (error) {  
              onError(typeof error === 'string' ? error : 'Opération echouée');
            } finally {
              setLoading((old)=>old - 1);
            }
          };
    
        return {
            getCategorie,
            categorie
        }
    };
    
export const useGetAllCategories = ()=>{
const {setLoading} = useLoadingContext();
const {onSuccess,onError} = useHandlerErrors();

    const [categories,setAllCategories] = useState([]);
      
        const getAllCategories = async (id) => {
            try {
              setLoading((old)=>old + 1);
              const response = await fetch(`${process.env.REACT_APP_API_URL}/api/categories`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`
                }
              });
              if (response.ok) {
                const data = await response.json();
                setAllCategories(data);
              }
            } catch (error) {  
              onError(typeof error === 'string' ? error : 'Opération echouée');
            } finally {
              setLoading((old)=>old - 1);
            }
          };
    
        return {
            getAllCategories,
            categories
        }
    };

export const useCreateOrUpdateCategory= ()=>{
const {setLoading} = useLoadingContext();
const {onSuccess,onError} = useHandlerErrors();

    const [categorie,setCategorie] = useState(null);
      
        const createOrUpdateCategory = async (body) => {
            try {
              setLoading((old)=>old + 1); 
              const response = await fetch(`${process.env.REACT_APP_API_URL}/api/categories/${body?.id || ''}`, {
                method:body?.id ? 'PUT' : 'POST',
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body:objectToFormData(body)
              });
              if (response.ok) {
                const data = await response.json();
               onSuccess(body?.id  ? "Catégorie mise à jour avec succès" : "Catégorie créée avec succès");
      
                setCategorie(data);
              } else if (!response.ok) { 
              onError("Erreur serveur"); 
              }
            } catch (error) {  
              onError(typeof error === 'string' ? error : 'Opération echouée');
            } finally {
              setLoading((old)=>old - 1);
            }
          };
    
        return {
            createOrUpdateCategory,
            categorie
        }
    }; 
export const useDeleteCategoryImage = () => {
  const { setLoading } = useLoadingContext();
  const { onSuccess, onError } = useHandlerErrors();

  const deleteCategoryImage = async (id) => {
    try {
      setLoading((old) => old + 1);

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/categories/image/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        onSuccess("Image supprimée avec succès");
        return await response.json();  
      } else {
        const errorData = await response.json();
      onError(typeof errorData === 'string' ? errorData : errorData.message || 'Opération échouée');
        throw new Error(errorData.message || 'Erreur lors de la suppression de l’image');
      }
    } catch (error) {
      onError(typeof error === 'string' ? error : error.message || 'Opération échouée');
      throw error;  
    } finally {
      setLoading((old) => old - 1);
    }
  };

  return {
    deleteCategoryImage,
  };















  
};

export const useDeleteCategory = () => {
  const { setLoading } = useLoadingContext();
  const { onSuccess, onError } = useHandlerErrors();

  const deleteCategory = async (id) => {
    try {
      setLoading((old) => old + 1);

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/categories/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        onSuccess("Catégorie supprimée avec succès");
        return await response.json();
      } else {
        const errorData = await response.json();
        onError(typeof errorData === 'string' ? errorData : errorData.message || 'Échec de la suppression');
        throw new Error(errorData.message || 'Erreur lors de la suppression de la catégorie');
      }
    } catch (error) {
      onError(typeof error === 'string' ? error : error.message || 'Échec de la suppression');
      throw error;
    } finally {
      setLoading((old) => old - 1);
    }
  };

  return {
    deleteCategory,
  };
};
