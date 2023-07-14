import React from 'react'
import { useAuth } from '../../hooks/useAuth'
// import {useProyectos} from '../../hooks/useProyectos'


export const Perfil = () => {
    // const {proyectos} = useProyectos()
  return (
        <section >
        <div className="container py-5">

            <div className="row">
            <div className="col-lg-4">
                <div className="card mb-4">
                <div className="card-body text-center">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{width: 150}} />
                    <h5 className="my-3">Ruben</h5>
                    {/* <h5 className="my-3">{proyectos.nombre}</h5> */}
                    <p className="text-muted mb-1">Full Stack Developer</p>
                    <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                    <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary">Follow</button>
                    <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                    </div>
                </div>
                </div>

            </div>
            <div className="col-lg-8">
                <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Apellido</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">freites</p>
                        {/* <p className="text-muted mb-0">{auth.nombre} {auth.apellido}</p> */}
                    </div>
                    </div>
                    <hr />
                    <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">freitesrs@gmail.com</p>
                        {/* <p className="text-muted mb-0">{auth.email}</p> */}
                    </div>
                    </div>
                    <hr />
                    <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Telefono de Contacto</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">0416-2515165</p>
                        {/* <p className="text-muted mb-0">{auth.telefono}</p> */}
                    </div>
                    </div>
                    <hr />
                    <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Direccion de Envio</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">barcelona</p>
                        {/* <p className="text-muted mb-0">{auth.direccion_envio}</p> */}
                    </div>
                    </div>
                    <hr />
                    <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Direccion Fiscal</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">barcelona</p>
                        {/* <p className="text-muted mb-0">{auth.direccion_fiscal}</p> */}
                    </div>
                    </div>
                    <hr />
                    <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Nombre de la Optica</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">CDOO</p>
                        {/* <p className="text-muted mb-0">{auth.nombre_optica}</p> */}
                    </div>
                    </div>
                    <hr />
                    <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Rif</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">8374784343</p>
                        {/* <p className="text-muted mb-0">{auth.rif}</p> */}
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">

                </div>
            </div>
            </div>
        </div>
        </section>

  )
}
