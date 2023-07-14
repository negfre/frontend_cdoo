import React, { createContext, useEffect, useState } from "react";
import { clienteAxios } from "../config/clienteAxios";

const ProyectosContext = createContext();

const ProyectosProvider = ({ children }) => {
  // Aquí puedes agregar tus estados y funciones relacionados con los proyectos
  const [proyectos, setProyectos] = useState ([]);
  const [alerta, setAlerta] = useState ([]);


  const mostrarAlerta = alerta => {

    setAlerta(alerta)

    setTimeout (() => {
    setAlerta({})
    },5000)
  }

  useEffect(() => {
    // Aquí puedes realizar cualquier lógica necesaria al cargar el proveedor
  }, []);




  return (
    <ProyectosContext.Provider
      value={{
        proyectos,
        mostrarAlerta
        // Aquí puedes pasar los estados y funciones que desees compartir con los componentes hijos
      }}
    >
      {children}
    </ProyectosContext.Provider>
  );
};

// export { ProyectosProvider, ProyectosContext };
export { 
  ProyectosProvider
}

export default ProyectosContext
