import { useLoadingContext } from "context/LoadingContext";
import { useState } from "react";
import { objectToFormData } from "utils";
import { useHandlerErrors } from "..";

 
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