import { createContext, useContext, useState, useEffect } from "react"; 

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] =  useState(null);  

 

  const login = async ({email, password}) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) { 
        throw new Error(data.message || "Email ou mot de passe incorrect");
      }

      if (data.token) { 
        setUser(data.user);
        localStorage.setItem('user',JSON.stringify(data?.user));
        localStorage.setItem('token',data.token);  
        window.location.reload(false);
      
        return data;
      }
    } catch (error) {
      console.error('Erreur de connexion:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        await fetch(`${process.env.REACT_APP_API_URL}/api/users/auth/logout`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
      }
    } catch (error) { 
      console.error("Erreur lors de la déconnexion:", error);
    } finally { 
      setUser(null);
      localStorage.clear() 
       window.location.reload(false);
    }
  };

  const value = {
    user,
    setUser, 
    login,
    logout,  
    isAuth:!!localStorage.getItem('token')
     
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