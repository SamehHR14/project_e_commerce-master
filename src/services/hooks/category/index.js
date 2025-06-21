import { useState } from "react";
import { objectToFormData } from "utils";

 
export const useGetCategorieById = ()=>{

    const [categorie,setCategorie] = useState(null);
      
        const getCategorie = async (id) => {
            try {
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
            }
          };
    
        return {
            getCategorie,
            categorie
        }
    };
export const useGetAllCategories = ()=>{

    const [categories,setAllCategories] = useState(null);
      
        const getAllCategories = async (id) => {
            try {
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
            }
          };
    
        return {
            getAllCategories,
            categories
        }
    };
export const useCreateOrUpdateCategory= ()=>{

    const [categorie,setCategorie] = useState(null);
      
        const createOrUpdateCategory = async (body) => {
            try {
              console.log(process.env.REACT_APP_API_URL)
              const response = await fetch(`${process.env.REACT_APP_API_URL}/api/categories/${body?.id || ''}`, {
                method:body?.id ? 'PUT' : 'POST',
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body:objectToFormData(body)
              });
              if (response.ok) {
                const data = await response.json();
                setCategorie(data);
              }
            } catch (error) {  
            }
          };
    
        return {
            createOrUpdateCategory,
            categorie
        }
    }; 