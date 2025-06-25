import { useLoadingContext } from "context/LoadingContext";
import { useState } from "react";
import { objectToFormData } from "utils";
import { useHandlerErrors } from "..";


export const useGetProductById = () => {
  const { setLoading } = useLoadingContext();
  const { onError } = useHandlerErrors();
  const [product, setProduct] = useState(null);

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

