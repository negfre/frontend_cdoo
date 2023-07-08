import React from 'react';
import { Link } from 'react-router-dom';
import { Content } from './Content';
import { Footer } from './Footer';



export const SideBar = () => {
  return (
    <>
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        {/* Sidebar - Brand */}
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-glasses" />
          </div>
          <div className="sidebar-brand-text mx-3">CDOO </div>
        </Link>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}

        <li className="nav-item active">
          <Link className="nav-link" href="/login">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span></Link>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">
          Interface
        </div>
        {/* Nav Item - Pages Collapse Menu Gestion de perfil */}
            <li className="nav-item">
              <Link className="nav-link collapsed" data-toggle="collapse" data-target="#collapsePerfil" aria-expanded="true" aria-controls="collapseTwo">
                <i className="fas fa-fw fa-cog" />
                <span>PERFIL</span>
              </Link>
              <div id="collapsePerfil" className="collapse" aria-labelledby="headingPerfil" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Gestión de Perfil</h6> 
                  <Link to='perfil' className="collapse-item" >Perfil</Link>
                  <Link to='editperfil' className="collapse-item" >Editar Perfil</Link>
                  
                </div>
              </div>
            </li>

        <li className="nav-item">
          <Link className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog" />
            <span>PEDIDOS</span>
          </Link>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Gestión de Pedidos</h6>
              <Link to='registro1' className="collapse-item" >Añadir Pedidos</Link>
              <Link className="collapse-item" >Historial de Pedidos</Link>
            </div>
          </div>
        </li>
        {/* Nav Item - Utilities Collapse Menu */}
        <li className="nav-item">
          <Link className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
            <i className="fas fa-fw fa-wrench" />
            <span>SERVICIOS</span>
          </Link>
          <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Gestión</h6>
              <Link className="collapse-item">Añadir Servicio</Link>
              <Link className="collapse-item">Añadir Servicios</Link>
              <Link className="collapse-item">Añadir Aervicios</Link>
              <Link className="collapse-item">Añadir Aervicios</Link>
            </div>
          </div>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">
          Addons
        </div>
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <a className="nav-link collapsed"  data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
            <i className="fas fa-fw fa-folder" />
            <span>Pages</span>
          </a>
          <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <Link className="collapse-item" >Login</Link>
              <Link className="collapse-item" >Register</Link>
              <Link className="collapse-item" >Forgot Password</Link>
              <div className="collapse-divider" />
              <h6 className="collapse-header">Other Pages:</h6>
              <Link className="collapse-item" >404 Page</Link>
              <Link className="collapse-item" >Blank Page</Link>
            </div>
          </div>
        </li>
        {/* Nav Item - Charts */}
        <li className="nav-item">
          <Link to="registro" className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area" />
            <span>Crear pedido</span>
          </Link>
        </li>
        {/* Nav Item - Tables */}
        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table" />
            <span>Tables</span></a>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />
        {/* Sidebar Toggler (Sidebar) */}
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
        {/* Sidebar Message */}
        <div className="sidebar-card d-none d-lg-flex">
          <img className="sidebar-card-illustration mb-2" src="/img/logo.jpeg" alt="..." />
        
          
        </div>
      </ul>
    </>

  )
};

