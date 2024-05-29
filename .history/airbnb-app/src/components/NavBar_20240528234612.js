import React from 'react'

const NavBar = () => {
  return (
    <div class="nav-container">
        <nav class="navbar">
            <a class="navbar-logo" href="/">
                <img src="images/logo-airbnb (2) 1.png" width="120" alt="Logo de la página web" />
            </a>
            <ul class="navbar-secciones">
                <li><a href="/" class="activo">Inicio</a></li>
                <li><a href="/" class="">Quiénes somos</a></li>
                <li><a href="/" class="">Contacto</a></li>
            </ul>
        </nav>
    </div>
  );
};

export default NavBar
