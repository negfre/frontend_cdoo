import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alerta } from '../components/Alerta';
import { clienteAxios } from '../config/clienteAxios';
import {useAuth} from '../hooks/useAuth';

export const Login1 = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [alerta, setAlerta] = useState("")

  const {setAuth} = useAuth();
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault();
    if ([email, password ].includes("")) {
      setAlerta({
          msg: "Todos los campos son obligatorios",
          error: true
      }) 
      return
    }

               //Autenticando Usuario
               try {
                const { data} = await clienteAxios.post('/api/auth/', {email, password});
                setAlerta({});
                localStorage.setItem('token', data.token);
                setAuth(data);
                navigate('/proyectos');
                //console.log(data)
                
              } catch (error) {
                //  console.log(error)

                 setAlerta({
                     msg: error.response.data.msg,
                     error:true
                 });
                
             }
  }
  const { msg } = alerta


  return (
   
<div className="container">
  {/* Outer Row */}
  <div className="row justify-content-center">
    <div className="col-xl-10 col-lg-12 col-md-9">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          {/* Nested Row within Card Body */}
          <div className="row">
            <div className="col-lg-6 d-none d-lg-block bg-login-image" />
            <div className="col-lg-6">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Bienvenido!</h1>

                                    
                {msg && <Alerta {...alerta} />}
                <br />

                </div>
                <form className="user"
                      onSubmit={handleSubmit}
                      >
                  <div className="form-group">
                    <input 
                    type="email" 
                    className="form-control form-control-user" 
                    id="email" 
                    aria-describedby="emailHelp" 
                    placeholder="ingresa tu Email..."
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input 
                    type="password" 
                    className="form-control form-control-user" 
                    id="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox small">
                      <input type="checkbox" className="custom-control-input" id="customCheck" />
                      <label className="custom-control-label" htmlFor="customCheck">Mantenerme Logeado</label>
                    </div>
                  </div>
                  {/* <button type="submit" className="btn btn-primary btn-user btn-block">
                        Registrar Cuenta
                  </button> */}
                              <input 
                                  type="submit"
                                  value="Iniciar Sesión"
                                  className="btn btn-primary btn-user btn-block"
                               />
                  <hr />
                    <br />
                    {/* <div className="text-center">
                  <Link className="small" href="#">Olvide mi Password?</Link>
                </div>
                <div className="text-center">
                  <Link className="small" href="#">Crea una cuenta!</Link>
                </div> */}

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
};
