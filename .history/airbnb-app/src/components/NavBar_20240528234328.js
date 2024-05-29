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
            <li><a href="" class="">Quiénes somos</a></li>
            <li><a href="contacto.html" class="">Contacto</a></li>
            <li><a class="menu-icon" href="#" onClick={handleMenuClick}><img src="images/menu.png" width="30" alt="Menú hamburguesa"></a></li>
        </ul>
        </nav>
    </div>
  );
};

export 
