import React from 'react'
import '../App.css';

const Footer = () => {

  return (
    <footer className="footer">
        <div className="container-footer">

            <div className="container-footer-primeralinea">
                <div className="lenguaje">
                    <a href="/">
                        <img src="./images/material-symbols_language.png" width="30" alt="Logo de lenguaje" />
                    </a>
                    <p>Español (AR)</p>
                </div>
                <p>$USD</p>
                <div className="redes-logos">
                    <a href="https://www.facebook.com/?locale=es_LA" target="_blank" rel="noopener noreferrer">
                        <img src="images/devicon_facebook.png" width="30" alt="Logo de Facebook" />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <img src="images/skill-icons_twitter.png" width="30" alt="Logo de Twitter" />
                    </a>
                    <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2F&hl=es-es&aa_click=8891933284028179"
                        target="_blank" rel="noopener noreferrer">
                        <img src="images/skill-icons_instagram.png" width="30" alt="Logo de Instagram" />
                    </a>
                </div>
            </div>

            <div className="container-footer-segundalinea">
                <p>&copy; 2024 Airbnb, Inc.</p>
                <p>
                    <a href="/">Privacidad</a>
                    <a href="/">Términos</a>
                    <a href="/">Mapa del sitio</a>
                </p>
            </div>
        </div>
    </footer>
  );
};


export default Footer;
