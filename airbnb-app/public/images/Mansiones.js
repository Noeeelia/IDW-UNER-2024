import React from "react";
import { Link } from "react-router-dom";
import "../styleForms.css/EstilosListaCards.css";


const Mansiones = () => {
    const mansiones = [
      {
        id: 1,
        img: "../images/mansion1.png",
        alt: "mansiones",
        nombre: "Mansión en la playa",
        descripcion: "Modernamansión con vista al mar. Posee 3 dormitorios y 2 baños.",
        dormitorios: 3,
        banos: 2,
        latitud: -34.603684,
        longitud: -58.381559,
        precio: 200,
        disponibilidad: "Disponible",
      },
      {
        id: 2,
        img: "../images/mansion3.png",
        alt: "mansiones",
        nombre: "Mansión con bosque",
        descripcion: "Acogedoramansión con  bosque con 2 dormitorios y 1 baño.",
        dormitorios: 2,
        banos: 1,
        latitud: -34.603684,
        longitud: -58.381559,
        precio: 150,
        disponibilidad: "No Disponible",
      },
      {
        id: 3,
        img: "../images/mansion2.png",
        alt: "mansiones",
        nombre: "Mansión en barrio privado",
        descripcion: "Amplia mansión en barrio privado con 3 dormitorios y 1 baño.",
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
          <h2 className="tiulos-pages">Mansiones</h2>
          <Link to="/" className="volver">Volver al inicio</Link> 
          <div className="cards-list">            
          {mansiones.map((mansiones) => (
              <div className="card-list" key={mansiones.id}>
                  <img src={mansiones.img} alt={mansiones.alt} />
                  <div className="card-list-description">
                      <h2>{mansiones.nombre}</h2>
                      <p>{mansiones.descripcion}</p>
                      <p>Dormitorios: {mansiones.dormitorios}</p>
                      <p>Baños: {mansiones.precio} por noche</p>
                      <p>Disponibilidad: {mansiones.disponibilidad}</p>
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
  
  export default Mansiones;