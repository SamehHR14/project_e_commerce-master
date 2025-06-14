import { RouterProvider } from "react-router-dom";
import React, { memo } from "react";
import { Container } from "@mui/material";
import { router } from "./router";

/**
 * Layout component that provides the main structure of the application.
 * It wraps the application in a Material-UI `Container` and sets up the router using `RouterProvider`.
 *
 
 *
 * @returns {JSX.Element} The layout component with routing provided by `RouterProvider`.
 */
const Layout = () => {
  return (
    
      <RouterProvider router={router} />
   
  );
};

export default memo(Layout);
