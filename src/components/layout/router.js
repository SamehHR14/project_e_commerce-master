import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from "react";
import Header from "../header";
import Footer from "../footer";
import { LoadingFullback } from "components/progress";

// Lazily load pages
const HomePages = lazy(() => import("../../pages/home/index"));
const ContactPages = lazy(() => import("../../pages/contact/index"));
const Apropos = lazy(() => import("../../pages/apropos/index"));
const Produits = lazy(() => import("../../pages/produits/index"));
const Nouveau = lazy(() => import("../../pages/nouveauté/index"));
const ProductDetails = lazy(() => import("../../pages/productDetails/index"));
const PrivateRoute = lazy(() => import("./private/index"));
const ProductForm = lazy(() => import("../../pages/productDetails/form"));
const CategoryForm = lazy(() => import("../../pages/category/form"));
const LoginForm = lazy(() => import("../../pages/login/index")); 


/**
 * Layout component that includes a fixed header and an outlet for rendering child routes.
 *
 * @returns {JSX.Element} The layout with a fixed header and routing outlet.
 */
const Layout = () => {
  return (
    <>
      <Header />
      <Box sx={{ marginTop: "64px" }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

/**
 * Defines the application routing structure.
 * Includes public routes for home, products, and login, as well as a private route wrapper for secure pages.
 */
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<LoadingFullback color="inherit" />}> <HomePages /> </Suspense>,
      },
      {
        path: '/contact',
        element: <Suspense fallback={<LoadingFullback color="inherit" />}> <ContactPages /> </Suspense>,
      },
      {
        path: '/a-propos',
        element: <Suspense fallback={<LoadingFullback color="inherit" />}> <Apropos /> </Suspense>,
      },{
  path: 'produit',
  element: (
    <Suspense fallback={<LoadingFullback color="inherit" />}>
      <Outlet />
    </Suspense>
  ),
  children: [
    {
      index: true, 
      element: (
        <Suspense fallback={<LoadingFullback color="inherit" />}>
          <Produits />
        </Suspense>
      ),
    },
    {
      path: ':id',
      element: (
        <Suspense fallback={<LoadingFullback color="inherit" />}>
          <Produits />
        </Suspense>
      ),
    }, 
  ],
} ,
      {
        path: '/nouveautes',
        element: <Suspense fallback={<LoadingFullback color="inherit" />}> <Nouveau /> </Suspense>,
      },
      {
        path: '/signIn',
      element: <Suspense fallback={<LoadingFullback color="inherit" />}> <LoginForm /> </Suspense>,
      },  
      {
        path: '/product/:id', // New route for product details
        element: <Suspense fallback={<LoadingFullback color="inherit" />}> <ProductDetails /> </Suspense>,
      },{
  path: 'productForm',
  element: (
    <Suspense fallback={<LoadingFullback color="inherit" />}>
      <Outlet />
    </Suspense>
  ),


  children: [
    {
      index: true, 
      element: (
        <Suspense fallback={<LoadingFullback color="inherit" />}>
          <ProductForm />
        </Suspense>
      ),
    },
    {
      path: ':id',
      element: (
        <Suspense fallback={<LoadingFullback color="inherit" />}>
          <ProductForm />
        </Suspense>
      ),
    }, 
  ],
}, 








{
  path: 'categoryForm',
  element: (
    <Suspense fallback={<LoadingFullback color="inherit" />}>
      <Outlet />
    </Suspense>
  ),
  children: [
    {
      index: true, 
      element: (
        <Suspense fallback={<LoadingFullback color="inherit" />}>
          <CategoryForm />
        </Suspense>
      ),
    },
    {
      path: ':id',
      element: (
        <Suspense fallback={<LoadingFullback color="inherit" />}>
          <CategoryForm />
        </Suspense>
      ),
    }, 
  ],
},

      {
        element: <PrivateRoute />,
        children: [
          /* Add private routes here */
        ],
      },
    ],
  },
]);
