import { Outlet } from "react-router-dom";
import { Box, LinearProgress, Container } from "@mui/material";
import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from "react";
import Header from "../header";
import Footer from "../footer";

// Lazily load pages
const HomePages = lazy(() => import("../../pages/home/index"));
const ContactPages = lazy(() => import("../../pages/contact/index"));
const Apropos = lazy(() => import("../../pages/apropos/index"));
//const ProductsPages = lazy(() => import("template/pulse_template/pages/products/index"));
//const SignInPage = lazy(() => import("template/global/pages/signIn/page"));
const PrivateRoute = lazy(() => import("./private/index"));

/**
 * Layout component that includes a fixed header and an outlet for rendering child routes.
 *
 * @returns {JSX.Element} The layout with a fixed header and routing outlet.
 */
const Layout = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box sx={{ flex: '1 0 auto', marginTop: '64px' }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
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
        element: <Suspense fallback={<LinearProgress color="inherit" />}> <HomePages /> </Suspense>,
      },
      {
        path: '/contact',
        element: <Suspense fallback={<LinearProgress color="inherit" />}> <ContactPages /> </Suspense>,
      },

       {
        path: '/a-propos',
         element: <Suspense fallback={<LinearProgress color="inherit" />}> <Apropos /> </Suspense>,
      },
      {
        path: '/page/produit',
        //element: <Suspense fallback={<LinearProgress color="inherit" />}> <ProduitPages /> </Suspense>,
      },
      {
        path: '/page/signIn',
        // element: <Suspense fallback={<LinearProgress color="inherit" />}> <SignInPage /> </Suspense>,
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