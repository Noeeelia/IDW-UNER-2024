import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <div className="nav-container">
        <nav className="navbar">
            <NavLink className="navbar-logo" to="/">
                <img src="./images/logo-airbnb (2) 1.png" width="120" alt="Logo de la página web" />
            </NavLink>
            <ul className="navbar-secciones">
                <li><NavLink to="/" className={({ isActive }) => isActive ? 'nav-link activo' : 'nav-link'} exact>Inicio</NavLink></li>
                <li><NavLink to="/organizacion" className={({ isActive }) => isActive ? 'nav-link activo' : 'nav-link'}>Quiénes somos</NavLink></li>
                <li><NavLink to="/contacto" className={({ isActive }) => isActive ? 'nav-link activo' : 'nav-link'}>Contacto</NavLink></li>
                <li><NavLink to="/administracion" className={({isActive}) => isActive ? ' activo' : 'nav-link'}><img src='./images/icon-Admin.svg' alt="Icono-Administracion"/></NavLink></li>
            </ul>
        </nav>
    </div>
  );
};

export default NavBar;
