import { createContext, useContext, useState, useEffect } from "react";
import { useLoadingContext } from "./LoadingContext";
import { useHandlerErrors } from "services/hooks";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const { setLoading } = useLoadingContext();

const {onSuccess,onError} = useHandlerErrors();


  const login = async ({ email, password }) => {
    try {
      setLoading((old) => old + 1);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
              onError(typeof data?.message === 'string' ? data?.message : 'Email ou mot de passe incorrect'); 
      }

      if (data.token) {
        setUser(data.user);
        localStorage.setItem('user', JSON.stringify(data?.user));
        localStorage.setItem('token', data.token);
        window.location.reload(false);

        return data;
      }
    } catch (error) { 
              onError(typeof error?.message === 'string' ? error?.message : 'Opération echouée');
   
    } finally {
      setLoading((old) => old - 1);
    }
  };

  const logout = async () => {
    setUser(null);
    localStorage.clear();
    setTimeout(() => {
      window.location.reload(false);
    }, 300)
  };

  const value = {
    user,
    setUser,
    login,
    logout,
    isAuth: !!localStorage.getItem('token')

  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
} 