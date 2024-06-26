import React from "react";
import { Link } from "react-router-dom";
import "../estilosForms.css/EstilosListaCards.css";

const Mansiones = () => {
  const mansiones = [
    {
      id: 1,
      img: "../images/mansion1.png",
      alt: "mansión",
      nombre: "Mansión en barrio cerrado",
      descripcion: "Gran mansión en barrio privado con 4 dormitorios y 2 baños.",
      dormitorios: 4,
      banos: 2,
      latitud: -34.603684,
      longitud: -58.381559,
      precio: 800,
      disponibilidad: {
        texto: "Disponible",
        img: "../images/Icons/Si24x24.svg"
      }
    },
    {
      id: 2,
      img: "../images/mansion2.png",
      alt: "mansión",
      nombre: "Mansión en zona portuaria",
      descripcion: "Espectacular mansión cerca del puerto de la ciudad. Posée 6 dormitorios y 3 baños.",
      dormitorios: 6,
      banos: 3,
      latitud: -34.603684,
      longitud: -58.381559,
      precio: 900,
      disponibilidad: {
        texto: "Disponible",
        img: "../images/Icons/Si24x24.svg"
      }
    },
    {
      id: 3,
      img: "../images/mansion3.png",
      alt: "mansión",
      nombre: "Mansión en el bosque",
      descripcion: "Increíble mansión escondida en el bosque con 4 dormitorios y 3 baños.",
      dormitorios: 4,
      banos: 3,
      latitud: -34.603684,
      longitud: -58.381559,
      precio: 800,
      disponibilidad: {
        texto: "Reservado",
        img: "../images/Icons/No24x24.svg"
      }
    },
  ];

  return (
    <section className="pages-catalogo">
        <h2 className="titulos-pages">Mansiones</h2>
        <div className="boton-volver">
          <Link to="/" className="volver">Atrás</Link> 
        </div>
        <div className="cards-list">            
        {mansiones.map((mansion) => (
            <div className="card-list" key={mansion.id}>
                <img src={mansion.img} alt={mansion.alt} />
                <div className="card-list-description">
                    <h2>{mansion.nombre}</h2>
                    <p>{mansion.descripcion}</p>

                    <div className="linea">
                      <img src="./images/Icons/habitacion.svg" className="icons-description" />  
                      <p>Dormitorios: {mansion.dormitorios}</p>     
                    </div>

                    <div className="linea">
                      <img src="./images/Icons/bano.svg" className="icons-description" /> 
                      <p>Baños: {mansion.banos}</p>
                    </div>

                    <div className="linea">
                      <img src="./images/Icons/precio.svg"
className="icons-description" /> 
                      <p>Precio: ${mansion.precio} por noche</p>    
                    </div>
                    <div className="disponibilidad">
                      <img src={mansion.disponibilidad.img} alt="disponibilidad" className="disponibilidad-icon" />
                      <p className="disponibilidad-text">{mansion.disponibilidad.texto}</p>
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

export default Mansiones;