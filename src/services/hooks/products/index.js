import { useLoadingContext } from "context/LoadingContext";
import { useState } from "react";
import { objectToFormData } from "utils";
import { useHandlerErrors } from "..";
import { useTranslation } from 'react-i18next';


export const useGetProductById = () => {
  const { setLoading } = useLoadingContext();
  const { onError } = useHandlerErrors();
  const [product, setProduct] = useState(null);
  const { t } = useTranslation();

  const getProduct = async (id) => {
    try {
      setLoading((old) => old + 1);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/products/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      if (response.ok) {
        const data = await response.json();
         onError(t('errors.operationFailed'));
         setProduct(data);
      }
    } catch (error) {
      onError(typeof error === 'string' ? error : 'Opération echouée');
    } finally {
      setLoading((old) => old - 1);
    }
  };

  return {
    getProduct,
    product
  }
};

export const useGetAllProducts = () => {
  const { setLoading } = useLoadingContext();
  const { onError } = useHandlerErrors();

  const [products, setAllProducts] = useState([]);
  const { t } = useTranslation();

  const getAllProducts = async (id) => {
    try {
      setLoading((old) => old + 1);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/products?${id ? 'categoryId=' + id : ''}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setAllProducts(data);
      }
        onError(t('errors.operationFailed'));
    } catch (error) {
      onError(typeof error === 'string' ? error : 'Opération echouée');
    } finally {
      setLoading((old) => old - 1);
    }
  };

  return {
    getAllProducts,
    products
  }
};
export const useGetLastAllProducts = () => {
  const { setLoading } = useLoadingContext();
  const { onError } = useHandlerErrors();

  const [lastProducts, setLastAllProducts] = useState([]);
  const { t } = useTranslation();

  const getLastAllProducts = async () => {
    try {
      setLoading((old) => old + 1);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/products/last`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setLastAllProducts(data);
        onError(t('errors.operationFailed'));
      }
    } catch (error) {
      onError(typeof error === 'string' ? error : 'Opération echouée');
    } finally {
      setLoading((old) => old - 1);
    }
  };

  return {
    getLastAllProducts,
    lastProducts
  }
};

export const useGetAllProductsActif = () => {
  const { setLoading } = useLoadingContext();
  const {  onError } = useHandlerErrors();

  const [productsActif, setAllProductsActif] = useState(null);
  

  const getAllProductsActif = async (id) => {
    try {
      setLoading((old) => old + 1);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/products/actif`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setAllProductsActif(data);
      }
    } catch (error) {
      onError(typeof error === 'string' ? error : 'Opération echouée');

    } finally {
      setLoading((old) => old - 1);
    }
  };

  return {
    getAllProductsActif,
    productsActif
  }
};

export const useCreateOrUpdateProduct = () => {
  const { setLoading } = useLoadingContext();
  const { onSuccess, onError } = useHandlerErrors();

  const [product, setProduct] = useState(null);

  const createOrUpdateProduct = async (body) => {
    try {
      setLoading((old) => old + 1);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/products/${body?.id || ''}`, {
        method: body?.id ? 'PUT' : 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: objectToFormData(body)
      });
      if (response.ok) {
        const data = await response.json();
        onSuccess(body?.id ? "Produit mis à jour avec succès" : "Produit créé avec succès");
        setProduct(data);
      }
    } catch (error) {
      onError(typeof error === 'string' ? error : 'Opération echouée');
    } finally {
      setLoading((old) => old - 1);
    }
  };

  return {
    createOrUpdateProduct,
    product
  }
};
 
export const useDeleteProduct = () => {
  const { setLoading } = useLoadingContext();
  const { onSuccess, onError } = useHandlerErrors();

  const deleteProduct = async (id) => {
    try {
      setLoading((old) => old + 1);

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/products/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });

      if (response.ok) {
        onSuccess("Produit supprimé avec succès.");
        return response;
      } else {
        const errorData = await response.json();
        onError(typeof errorData === 'string' ? errorData : errorData.message || 'Opération échouée');
        throw new Error(errorData.message || 'Erreur lors de la suppression du produit');
      }
    } catch (error) {
      onError(typeof error === 'string' ? error : error.message || 'Opération échouée');
      throw error;  
    } finally {
      setLoading((old) => old - 1);
    }
  };

  return {
    deleteProduct,
  };
};

export const useDeleteProductImage = () => {
  const { setLoading } = useLoadingContext();
  const { onSuccess, onError } = useHandlerErrors();

  const deleteProductImage = async (id) => {
    try {
      setLoading((old) => old + 1);

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/products/image/${id}`, {
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
    deleteProductImage,
  };
};
