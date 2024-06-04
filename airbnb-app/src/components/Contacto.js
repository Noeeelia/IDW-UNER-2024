import React from 'react';
import '../App.css';

const Contacto = () => {

  return (
    
    <section className="container-contacto">
        <h2>Contáctanos</h2>
        <div className="cuadro">
            <p>¿Tienes alguna pregunta o comentario? Estamos aquí para ayudarte en cada paso de tu viaje. Nuestro equipo de atención al cliente está disponible las 24/7 para brindarte el apoyo que necesitas. Contáctanos a través de nuestro servicio de atención al cliente o redes sociales. ¡Estamos listos para hacer de tu próxima aventura una experiencia inolvidable!</p>
        </div>

        <h2>Déjanos tu consulta</h2>
        <div className="cuadro">
            <form action="formulario" method="post">
                <div className="grupo-form">
                    <label className="label" for="nombre"></label>
                    <input className="casilla" type="text" id="nombre" name="nombre" placeholder="Nombre" />
                </div>

                <div className="grupo-form">
                    <label className="label" for="email"></label>
                    <input className="casilla" type="email" id="email" name="email" placeholder="Email" />
                </div>
                <div className="grupo-form">
                    <label className="label" for="consulta"></label>
                    <textarea className="casilla" name="consulta" id="consulta" cols="30" rows="10" placeholder="Escriba aquí su mensaje..."></textarea>
                </div>
                <div className="boton-container">
                    <button type="reset">Enviar</button>
                </div>
            </form>  
        </div>

        <h2>¿Dónde nos puedes encontrar?</h2>
        <div className="mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d210041.5418583607!2d-58.94795894622806!3d-34.65725125101769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHoteles!5e0!3m2!1ses-419!2sar!4v1714755616664!5m2!1ses-419!2sar" title='Mapa de google' width="600" height="480" style={{ border: '0' }} allowfullscreen="" aria-hidden="false" tabIndex="0"></iframe>
        </div>            
    </section>   
  );
};


export default Contacto;
