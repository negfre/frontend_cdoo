import { useState } from "react";
import { Alerta } from "../components/Alerta";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";



export const Registro = () => {

        const [ nombre, setNombre ] = useState("")
        const [ apellido, setApellido ] = useState("")
        const [ email, setEmail ] = useState("")
        const [ password, setPassword ] = useState("")
        const [ repetirPassword, setRepetirPassword ] = useState("")
        const [ nombre_optica, setNombreOptica ] = useState("")
        const [ direccion_fiscal, setDireccionFiscal ] = useState("")
        const [ direccion_envio, setDireccionEnvio ] = useState("")
        const [ rif, setRif ] = useState("")
        const [ telefono, setTelefono ] = useState("")
        const [alerta, setAlerta] = useState({});

  const navigate = useNavigate() 

        const handleSubmit = async e => {
            e.preventDefault();

            if ([nombre,apellido, email, password, repetirPassword, nombre_optica, direccion_fiscal, direccion_envio, rif, telefono ].includes("")) {
                setAlerta({
                    msg: "Todos los campos son obligatorios",
                    error: true
                }) 
                return
            }


            if ( password !== repetirPassword){

                setAlerta({
                    msg: "los password no son iguales",
                    error: true
                }) 
                return
            }
            if ( password.length < 6 ){

                setAlerta({
                    msg: "El password debe tener minimo 6 digitos",
                    error: true
                }) 
                return
            }

            setAlerta({})

         //Creando usuario
         try {
            const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/new/`, {nombre, apellido, email, password, nombre_optica, direccion_fiscal, direccion_envio, rif, telefono })
            
            setAlerta({
                msg: data.msg,
                error: false
                
            })
            navigate('/proyectos/registro')
            
         } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error:true
            })
            
         }

        }

const { msg } =alerta


  return (
            <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                    {/* <div className="col-lg-5 d-none d-lg-block bg-register-image" /> */}
                    <div className="col-lg-12">
                    <div className="p-5">
                        <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Crear una Cuenta!</h1>
                        </div>
                        
                        {/* {msg && <Alerta alerta={alerta}  />} */}
                        {msg && <Alerta {...alerta} />}
                            <br />
                        <form 
                        className="user"
                        onSubmit={handleSubmit}>
                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                            <input 
                            type="text" 
                            className="form-control 
                            form-control-user" 
                            id="nombre" 
                            placeholder="Primer Nombre"
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                             />
                            </div>
                            <div className="col-sm-6">
                            <input 
                            type="text" 
                            className="form-control form-control-user" 
                            id="apellido" 
                            placeholder="Apellido"
                            value={apellido}
                            onChange={e => setApellido(e.target.value)} />
                            </div>
                        </div>

                        <div className="form-group">
                            <input 
                            type="email" 
                            className="form-control form-control-user" 
                            id="email" 
                            placeholder="Email "
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                            <input 
                            type="password" 
                            className="form-control form-control-user" 
                            id="password" 
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} 
                            />
                            </div>

                            <div className="col-sm-6">
                            <input 
                            type="password" 
                            className="form-control form-control-user" 
                            id="password2" 
                            placeholder="Repetir Password"
                            value={repetirPassword}
                            onChange={e => setRepetirPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                            <input 
                            type="text" 
                            className="form-control form-control-user" 
                            id="nombre_optica" 
                            placeholder="Nombre de la Óptica"
                            value={nombre_optica}
                            onChange={e => setNombreOptica(e.target.value)} />
                            </div>



                            <div className="col-sm-6">
                            <input 
                            type="text" 
                            id="rif"
                            className="form-control form-control-user"  
                            placeholder="Rif"
                            value={rif}
                            onChange={e => setRif(e.target.value)}/>
                            </div>



                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6">
                            <input 
                            type="adress" 
                            id="direccion_envio"
                            className="form-control form-control-user"  
                            placeholder="Dirección de Envío"
                            value={direccion_envio}
                            onChange={e => setDireccionEnvio(e.target.value)} />
                            </div>

                            <div className="col-sm-6">
                            <input 
                            type="adress"
                            id="direccion_fiscal" 
                            className="form-control form-control-user"  
                            placeholder="Dirección fiscal"
                            value={direccion_fiscal}
                            onChange={e => setDireccionFiscal(e.target.value)} />
                            </div>



                        </div>
                        <div className="form-group row col-sm-11">
                            
                            <input 
                            type="tel" 
                            className="form-control form-control-user"  
                            placeholder="Teléfono"
                            value={telefono}
                            onChange={e => setTelefono(e.target.value)}
                             />
                            </div>
                                               
                        <button type="submit" className="btn btn-primary btn-user btn-block">
                        Registrar Cuenta
                        </button>

                        <hr />
                        <br />

                        </form>
                        
                        <div className="text-center">
                        <a className="small" href="/login">Olvide mi Password?</a>
                        </div>
                        <div className="text-center">
                        <a className="small" href="/login">Ya tengo una cuenta? Login!</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

  )
}
