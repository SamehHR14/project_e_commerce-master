import { Outlet } from "react-router-dom"; 
import { Box, LinearProgress } from "@mui/material";
import { createBrowserRouter } from 'react-router-dom'; 
import { lazy,Suspense } from "react";
import Header from "../header"

// Lazily load pages
const HomePages = lazy(() => import("../../pages/home/index")); 
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
    <>
      <Header/>

      <Box sx={{
        marginTop:"64px"

      }}>
         
         <Outlet/>

        </Box>

     

    </>
  );
};

/**
 * Defines the application routing structure.
 * Includes public routes for home, products, and login, as well as a private route wrapper for secure pages.
 *
 *
 */
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element:<Suspense fallback={<LinearProgress color="inherit" />}> <HomePages /> </Suspense>,
      }, 
      {
        path: '/page/products',
       // element:<Suspense fallback={<LinearProgress color="inherit" />}>  <ProductsPages /> </Suspense>,
      },
      {
        path: '/page/signIn',
       // element:<Suspense fallback={<LinearProgress color="inherit" />}>  <SignInPage /></Suspense>,
      },
      {
        // Wrapper for private routes
        element:  <PrivateRoute /> ,
        children: [
          /**
           * Add private routes here.
           * Example: 
           * {
           *   path: '/myAccount',
           *   element:<Suspense fallback={<>Account page loading ......... </>}> <Account /></Suspense>,
           * },
           */
        ],
      }, 
    ],
  },
]);
