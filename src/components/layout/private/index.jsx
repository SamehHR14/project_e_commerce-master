import { Navigate, Outlet } from 'react-router-dom';
//import { useAuth } from 'context/AuthContext';

/**
 * A wrapper component that restricts access to authenticated users only.
 * If the user is authenticated, it renders the child components (using `<Outlet />`).
 * If the user is not authenticated, it redirects to the sign-in page.
 *
 

 *
 * @returns {JSX.Element} The `<Outlet />` component if authenticated, otherwise a `<Navigate />` component.
 */
const PrivateRoute = () => {
  //const { isAuthenticated } = useAuth();
  const isAuthenticated  = false

  return isAuthenticated ? <Outlet /> : <Navigate to="/signIn" />;

};
export default PrivateRoute;
