import React from "react";
import { Link } from "react-router-dom";
import "../styleForms.css/EstilosListaCards.css";

const Casas = () => {
  const casas = [
    {
      id: 1,
      img: "../images/casa1.png",
      alt: "casas",
      nombre: "Casa en la playa",
      descripcion: "Moderna casa con vista al mar. Posee 3 dormitorios y 2 baños.",
      dormitorios: 3,
      banos: 2,
      latitud: -34.603684,
      longitud: -58.381559,
      precio: 200,
      disponibilidad: "Disponible",
    },
    {
      id: 2,
      img: "../images/casa2.png",
      alt: "casas",
      nombre: "Casa en el bosque",
      descripcion: "Acogedora casa en el bosque con 2 dormitorios y 1 baño.",
      dormitorios: 2,
      banos: 1,
      latitud: -34.603684,
      longitud: -58.381559,
      precio: 150,
      disponibilidad: "No Disponible",
    },
    {
      id: 3,
      img: "../images/casa3.png",
      alt: "casas",
      nombre: "Casa en los suburbios",
      descripcion: "Amplia casa en los suburbios con 3 dormitorios y 1 baño.",
      dormitorios: 3,
      banos: 1,
      latitud: -34.603684,
      longitud: -58.381559,
      precio: 300,
      disponibilidad: "Disponible",
    },
  ];

  return (
    <section className="pages-catalogo">
        <h2 className="tiulos-pages">Casas</h2>
        <Link to="/" className="volver">Volver al inicio</Link> 
        <div className="cards-list">            
        {casas.map((casa) => (
            <div className="card-list" key={casa.id}>
                <img src={casa.img} alt={casa.alt} />
                <div className="card-list-description">
                    <h2>{casa.nombre}</h2>
                    <p>{casa.descripcion}</p>
                    <p>Dormitorios: {casa.dormitorios}</p>
                    <p>Baños: {casa.banos}</p>
                    <p>Precio: ${casa.precio} por noche</p>
                    <p>Disponibilidad: {casa.disponibilidad}</p>
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

export default Casas;

