import React from "react";
import { Link } from "react-router-dom";
import "../estilosForms.css/EstilosListaCards.css";

const Habitaciones = () => {
  const habitaciones = [
    {
      id: 1,
      img: "../images/hab1.png",
      alt: "habitación",
      nombre: "Habitación en el centro",
      descripcion: "Hermosa habitación en el centro de la ciudad con 1 baño en suite.",
      dormitorios: 1,
      banos: 1,
      latitud: -34.603684,
      longitud: -58.381559,
      precio: 250,
      disponibilidad: {
        texto: "Disponible",
        img: "../images/Icons/Si24x24.svg"
      }
    },
    {
      id: 2,
      img: "../images/hab2.png",
      alt: "habitación",
      nombre: "Habitación en la ciudad",
      descripcion: "Amplia habitación en la ciudad con baño en suite.",
      dormitorios: 1,
      banos: 1,
      latitud: -34.603684,
      longitud: -58.381559,
      precio: 200,
      disponibilidad: {
        texto: "Disponible",
        img: "../images/Icons/Si24x24.svg"
      }
    },
    {
      id: 3,
      img: "../images/hab3.png",
      alt: "habitación",
      nombre: "Habitación zona universitaria",
      descripcion: "Acogedora habitación estilo colonial con baño compartido.",
      dormitorios: 1,
      banos: 1,
      latitud: -34.603684,
      longitud: -58.381559,
      precio: 100,
      disponibilidad: {
        texto: "Reservado",
        img: "../images/Icons/No24x24.svg"
      }
    },
  ];

  return (
    <section className="pages-catalogo">
        <h2 className="titulos-pages">Habitaciones</h2>
        <div className="boton-volver">
          <Link to="/" className="volver">Atrás</Link> 
        </div>
        <div className="cards-list">            
        {habitaciones.map((habitacion) => (
            <div className="card-list" key={habitacion.id}>
                <img src={habitacion.img} alt={habitacion.alt} />
                <div className="card-list-description">
                    <h2>{habitacion.nombre}</h2>
                    <p>{habitacion.descripcion}</p>

                    <div className="linea">
                      <img src="./images/Icons/habitacion.svg" className="icons-description" />  
                      <p>Dormitorios: {habitacion.dormitorios}</p>     
                    </div>

                    <div className="linea">
                      <img src="./images/Icons/bano.svg" className="icons-description" /> 
                      <p>Baños: {habitacion.banos}</p>
                    </div>

                    <div className="linea">
                      <img src="./images/Icons/precio.svg"
className="icons-description" /> 
                      <p>Precio: ${habitacion.precio} por noche</p>    
                    </div>
                    <div className="disponibilidad">
                      <img src={habitacion.disponibilidad.img} alt="disponibilidad" className="disponibilidad-icon" />
                      <p className="disponibilidad-text">{habitacion.disponibilidad.texto}</p>
                    </div>

                </div>
            </div> 
            ))}

        </div>
        <div className="boton-volver">
        <Link to="/" className="volver">Atrás</Link> 
        </div>
      <br></br>
    </section>
  );
};

export default Habitaciones;

