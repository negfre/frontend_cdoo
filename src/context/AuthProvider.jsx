import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { clienteAxios } from '../config/clienteAxios';

const AuthContext = createContext();

 export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [cargando, setCargando] = useState(true);
  const navigate = useNavigate();

      useEffect(() => {
        const autenticarUsuario = async () => {
          const token = localStorage.getItem('token')
          if (!token) {
            setCargando(false)
            return 
          }

          const config = {

          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
          }
          }

          try {
            const { data } = await clienteAxios('/api/auth/perfil', config);
            setAuth(data);
            console.log(data);
            navigate('/proyectos');
            } catch (error) {
            setAuth({});
          }

          setCargando(false);
        };

        autenticarUsuario();
      }, []);

  const cerrarSesionAuth = () => {
    setAuth({});
    localStorage.removeItem('token'); // Elimina el token almacenado en el almacenamiento local al cerrar sesión
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        cargando,
        cerrarSesionAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// export { AuthProvider };
export default AuthContext;
