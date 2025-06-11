import { memo } from "react";
import { Box } from "@mui/material";

import { NavLink } from "react-router-dom";

/**
 * HomePages component displays the home page of the E-commerce site.
 * It includes the site logo, a welcome message, and a navigation link to the products page.
 
 *
 * @returns {JSX.Element} The home page component.
 */
const HomePages = () => {
  return (
    <Box>
     
      <Box>Welcome to the Home page of our E-commerce site</Box>

      <NavLink to={"/products"}>ProductsPages</NavLink>
    </Box>
  );
};

export default memo(HomePages);