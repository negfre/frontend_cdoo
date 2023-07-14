import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { SideBar } from "../components/SideBar"
import { Footer } from "../components/Footer"
import { TopBar } from "../components/TopBar"
import { Modal } from "../components/Modal"
import {Principal} from '../pages/Principal'




export const Rutaprotegida = () => {
  const { auth, cargando } = useAuth();
  if(cargando) return 'Cargando...'

  return (
          <>
          
            {auth.id_usuario ? ( <Principal/>  ) : <Navigate to="/" />}
          </> 
  )
}
