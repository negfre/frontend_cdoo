import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { SideBar } from "../components/SideBar"
import { Footer } from "../components/Footer"
import { TopBar } from "../components/TopBar"
import { Modal } from "../components/Modal"



export const Rutaprotegida = () => {
  const { auth, cargando } = useAuth();
  if(cargando) return 'Cargando...'

  return (
          <>
          
            {auth.id_usuario ? (                        
                              <> 
                              <div id="wrapper">
                                <SideBar />
                                      <div id="content-wrapper" className="d-flex flex-column">

                                            <div id="content"> 
                                                      <TopBar />

                                                      <div className="container-fluid"> 
                                                      
                                                      <Outlet/>
                                                        </div>
                                            </div> {/*id="content"*/}
                                      <Footer />
                                    </div> {/*content-wrapper*/}
                            </div>

                            <Modal />
                            </>

                            
                          
                        ) : <Navigate to="/" />}
          </> 
  )
}
