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
const Produits = lazy(() => import("../../pages/produits/index"));

const PrivateRoute = lazy(() => import("./private/index"));

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
        path: '/produit',
        element: <Suspense fallback={<LinearProgress color="inherit" />}> <Produits /> </Suspense>,
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