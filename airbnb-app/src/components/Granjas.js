import React from "react";
import { Link } from "react-router-dom";
import "../styleForms.css/EstilosListaCards.css";


const Granjas = () => {
    const granjas = [
      {
        id: 1,
        img: "../images/granja1.png",
        alt: "granjas",
        nombre: "Granja en la playa",
        descripcion: "Moderna granja con vista al mar. Posee 3 dormitorios y 2 baños.",
        dormitorios: 3,
        banos: 2,
        latitud: -34.603684,
        longitud: -58.381559,
        precio: 200,
        disponibilidad: "Disponible",
      },
      {
        id: 2,
        img: "../images/granja2.png",
        alt: "granjas",
        nombre: "Granja en el bosque",
        descripcion: "Acogedora granja con  bosque con 2 dormitorios y 1 baño.",
        dormitorios: 2,
        banos: 1,
        latitud: -34.603684,
        longitud: -58.381559,
        precio: 150,
        disponibilidad: "No Disponible",
      },
      {
        id: 3,
        img: "../images/granja3.png",
        alt: "granjas",
        nombre: "Granja en los suburbios",
        descripcion: "Amplia granja en suburbios con 3 dormitorios y 1 baño.",
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
          <h2 className="tiulos-pages">Granjas</h2>
          <Link to="/" className="volver">Volver al inicio</Link> 
          <div className="cards-list">            
          {granjas.map((granja) => (
              <div className="card-list" key={granja.id}>
                  <img src={granja.img} alt={granja.alt} />
                  <div className="card-list-description">
                      <h2>{granja.nombre}</h2>
                      <p>{granja.descripcion}</p>
                      <p>Dormitorios: {granja.dormitorios}</p>
                      <p>Baños: {granja.banos}</p>
                      <p>Precio: ${granja.precio} por noche</p>
                      <p>Disponibilidad: {granja.disponibilidad}</p>
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
  
  export default Granjas;