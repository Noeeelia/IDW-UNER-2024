import React, { useState } from 'react';
import '../App.css';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [consulta, setConsulta] = useState('');

  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (nombre === "") {
      alert("El nombre no puede estar vacío.");
    } else if (!nameRegex.test(nombre)) {
      alert("El nombre sólo puede contener letras");
    } else if (!emailRegex.test(email)) {
      alert("Por favor, ingresá un email válido.");
    } else if (consulta === "") {
      alert("La consulta no puede estar vacía.");
    } else {
      alert("Se ha insertado nombre, email y consulta correctamente.");
      limpiarFormulario();
    }
  };

  const limpiarFormulario = () => {
    setNombre('');
    setEmail('');
    setConsulta('');
  };

  return (
    <section className="container-contacto">
      <h2>Contáctanos</h2>
      <div className="cuadro">
        <p>¿Tienes alguna pregunta o comentario? Estamos aquí para ayudarte en cada paso de tu viaje. Nuestro equipo de atención al cliente está disponible las 24/7 para brindarte el apoyo que necesitas. Contáctanos a través de nuestro servicio de atención al cliente o redes sociales. ¡Estamos listos para hacer de tu próxima aventura una experiencia inolvidable!</p>
      </div>

      <h2>Déjanos tu consulta</h2>
      <div className="cuadro">
        <form onSubmit={handleSubmit} id="form">
          <div className="grupo-form">
            <label className="label" htmlFor="nombre"></label>
            <input
              className="casilla" type="text" id="input_nombre" name="nombre" placeholder="Nombre"
              value={nombre} onChange={(e) => setNombre(e.target.value)}/>
          </div>

          <div className="grupo-form">
            <label className="label" htmlFor="email"></label>
            <input className="casilla" type="email" id="input_email" name="email" placeholder="Email"
              value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className="grupo-form">
            <label className="label" htmlFor="consulta"></label>
            <textarea className="casilla" name="consulta" id="input_consulta" cols="30" rows="10" placeholder="Escriba aquí su mensaje..."
              value={consulta} onChange={(e) => setConsulta(e.target.value)}></textarea>
          </div>

          <div className="boton-container">
            <button type="submit">Enviar</button>
            {/*<button type="button" onClick={limpiarFormulario}>Borrar</button>*/}
          </div>
        </form>
      </div>

      <h2>¿Dónde nos puedes encontrar?</h2>
      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d210041.5418583607!2d-58.94795894622806!3d-34.65725125101769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHoteles!5e0!3m2!1ses-419!2sar!4v1714755616664!5m2!1ses-419!2sar"
          title='Mapa de google'
          width="600"
          height="480"
          style={{ border: '0' }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </section>
  );
};

export default Contacto;

