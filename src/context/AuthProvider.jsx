// Archivo para autenticación y autorización, controlando el login, logout, 
// y permisos de acceso según roles (cliente o administrador).

// src/context/AuthProvider.jsx
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para almacenar los datos del usuario autenticado
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para verificar autenticación, si el usuario ha iniciado sesión.

  useEffect(() => {
    // Al cargar, se puede verificar si el usuario está autenticado (por ejemplo, chequeando un token en localStorage)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (username, password) => {
    // Simulación de autenticación (en una app real, harías una llamada a una API)

    const usersData = require("./vive_outdoors/public/users.json");
    const foundUser = usersData.find(
      (user) => user.username === username && user.password === password
    );

    // si es exitoso guarda el usuario en un local storage
    if (foundUser) {
      setUser(foundUser);
      setIsAuthenticated(true);
      localStorage.setItem("user", JSON.stringify(foundUser)); // Persistencia en localStorage
      return true;
    } else {
      alert("Credenciales Incorrectas, intente de nuevo"); //mensaje en caso de error
      return false;
    }
  };

  const logout = () => { //Limpia el estado del usuario y elimina cualquier persistencia.
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user"); // Limpia la persistencia
  };

  const register = (newUser) => {
    // Simulación de registro (esto usualmente implicaría una llamada a una API)
    // registrar un nuevo usuario y simula agregarlo a un archivo JSON
    const usersData = require("/vive_outdoors/public/users.json");
    usersData.push(newUser);
    
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

