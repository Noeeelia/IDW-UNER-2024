import React from "react";
import { Link } from "react-router-dom";
import "../styleForms.css/EstilosListaCards.css";


const Cabañas = () => {
    const cabañas = [
      {
        id: 1,
        img: "../images/cabana1.png",
        alt: "cabanas",
        nombre: "Cabaña en la playa",
        descripcion: "Moderna cabaña con vista al mar. Posee 3 dormitorios y 2 baños.",
        dormitorios: 3,
        banos: 2,
        latitud: -34.603684,
        longitud: -58.381559,
        precio: 200,
        disponibilidad: "Disponible",
      },
      {
        id: 2,
        img: "../images/cabana3.png",
        alt: "cabaña",
        nombre: "Cabaña en el bosque",
        descripcion: "Acogedora cabaña con  bosque con 2 dormitorios y 1 baño.",
        dormitorios: 2,
        banos: 1,
        latitud: -34.603684,
        longitud: -58.381559,
        precio: 150,
        disponibilidad: "No Disponible",
      },
      {
        id: 3,
        img: "../images/cabana2.png",
        alt: "cabaña",
        nombre: "Cabaña en los suburbios",
        descripcion: "Amplia cabaña en suburbios con 3 dormitorios y 1 baño.",
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
          <h2 className="tiulos-pages">Cabañas</h2>
          <Link to="/" className="volver">Volver al inicio</Link> 
          <div className="cards-list">            
          {cabañas.map((cabana) => (
              <div className="card-list" key={cabana.id}>
                  <img src={cabana.img} alt={cabana.alt} />
                  <div className="card-list-description">
                      <h2>{cabana.nombre}</h2>
                      <p>{cabana.descripcion}</p>
                      <p>Dormitorios: {cabana.dormitorios}</p>
                      <p>Baños: {cabana.banos}</p>
                      <p>Precio: ${cabana.precio} por noche</p>
                      <p>Disponibilidad: {cabana.disponibilidad}</p>
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
  
  export default Cabañas;