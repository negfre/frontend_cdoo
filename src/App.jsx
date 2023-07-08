import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {AuthProvider} from './context/AuthProvider'
import {ProyectosProvider} from './context/ProyectosProvider'
import React, { useReducer, useEffect } from 'react';
import { Rutaprotegida } from "./layouts/Rutaprotegida";
import { Perfil } from "./components/perfil/Perfil";
import { Login1 } from './pages/Login1';
import { Registro } from './pages/Registro';
import { Header } from "./components/Header";
import { FormularioPerfil } from "./components/perfil/FormularioPerfil";
import { useAuth } from "./hooks/useAuth";
import { Registro1 } from "./pages/Registro1";


export const App = () => {

  return (

            <BrowserRouter>
            <AuthProvider>
              <ProyectosProvider>
                    <Routes>

                      <Route path="/" element={<Login1 />}>
                        {/* <Route index element={<Login1 />} /> */}
                     
                      </Route>


                    <Route path="/proyectos" element={<Rutaprotegida />}>
                        <Route path="registro" element={<Registro />} /> 
                        <Route path="registro1" element={<Registro1 />} /> 
                        <Route path="perfil" element={<Perfil />} /> 
                        <Route path="editperfil" element={<FormularioPerfil />} /> 

                    </Route>
                        {/* <Route path="crear-proyecto" element={<NuevoProyecto />} />
                        <Route path="nuevo-colaborador/:id" element={<NuevoColaborador />} />
                        <Route path=":id" element={<Proyecto />} />
                        <Route path="editar/:id" element={<EditarProyecto />} /> */}
                  </Routes> 

              </ProyectosProvider>   
        
            </AuthProvider>
            </BrowserRouter>

  )
};
