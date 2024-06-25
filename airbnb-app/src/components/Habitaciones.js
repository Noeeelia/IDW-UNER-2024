import React from "react";
import { Link } from "react-router-dom";
import "../styleForms.css/EstilosListaCards.css";

const Habitaciones = () => {
  const habitacion = [
    {
      id: 1,
      img: "../images/hab1.png",
      alt: "habitacion",
      nombre: "Habitación en la playa",
      descripcion: "Hermosa vista y ambiente comodo.",
      dormitorios: 1,
      banos: 1,
      latitud: -34.603684,
      longitud: -58.381559,
      precio: 200,
      disponibilidad: "Disponible",
    },
    {
      id: 2,
      img: "../images/hab2.png",
      alt: "habitacion",
      nombre: "Habitación en el bosque",
      descripcion: "Acogedora con 1 baño.",
      dormitorios: 1,
      banos: 1,
      latitud: -34.603684,
      longitud: -58.381559,
      precio: 150,
      disponibilidad: "No Disponible",
    },
    {
      id: 3,
      img: "../images/hab3.png",
      alt: "habitacion",
      nombre: "Habitación en los suburbios",
      descripcion: "Amplia Habitación en los suburbios  1 baño.",
      dormitorios: 1,
      banos: 1,
      latitud: -34.603684,
      longitud: -58.381559,
      precio: 300,
      disponibilidad: "Disponible",
    },
  ];

  return (
    <section className="pages-catalogo">
        <h2 className="tiulos-pages">Habitaciones</h2>
        <Link to="/" className="volver">Volver al inicio</Link> 
        <div className="cards-list">            
        {habitacion.map((habitacion) => (
            <div className="card-list" key={habitacion.id}>
                <img src={habitacion.img} alt={habitacion.alt} />
                <div className="card-list-description">
                    <h2>{habitacion.nombre}</h2>
                    <p>{habitacion.descripcion}</p>
                    <p>Dormitorios: {habitacion.dormitorios}</p>
                    <p>Baños: {habitacion.banos}</p>
                    <p>Precio: ${habitacion.precio} por noche</p>
                    <p>Disponibilidad: {habitacion.disponibilidad}</p>
                    {/* <Link to={`/casa/${casa.id}`}>Ver más</Link> */}
                </div>
            </div> 
            ))}
        
        </div>
        <div className="boton-volver">
        <Link to="/" className="volver">Volver al inicio</Link> 
        </div>
    </section>
  );
};

export default Habitaciones;