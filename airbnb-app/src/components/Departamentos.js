import React from "react";
import { Link } from "react-router-dom";
import "../styleForms.css/EstilosListaCards.css";

const Departamentos = () => {
  const departamentos = [
    {
      id: 1,
      img: "../images/dpto2.png",
      alt: "departamentos",
      nombre: "Departamento en la playa",
      descripcion: "Moderno departamento con vista al mar. Posee 3 dormitorios y 2 baños.",
      dormitorios: 3,
      banos: 2,
      latitud: -34.603684,
      longitud: -58.381559,
      precio: 200,
      disponibilidad: "Disponible",
    },
    {
      id: 2,
      img: "../images/dpto1.png",
      alt: "departamentos",
      nombre: "Departamento frente al parque",
      descripcion: "Acogedor departamento en el bosque con 2 dormitorios y 1 baño.",
      dormitorios: 2,
      banos: 1,
      latitud: -34.603684,
      longitud: -58.381559,
      precio: 150,
      disponibilidad: "No Disponible",
    },
    {
      id: 3,
      img: "../images/depto3.png",
      alt: "departamentos",
      nombre: "Departamento en los suburbios",
      descripcion: "Amplio departamento en los suburbios con 3 dormitorios y 1 baño.",
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
        <h2 className="tiulos-pages">Departamentos</h2>
        <Link to="/" className="volver">Volver al inicio</Link> 
        <div className="cards-list">            
        {departamentos.map((departamento) => (
            <div className="card-list" key={departamento.id}>
                <img src={departamento.img} alt={departamento.alt} />
                <div className="card-list-description">
                    <h2>{departamento.nombre}</h2>
                    <p>{departamento.descripcion}</p>
                    <p>Dormitorios: {departamento.dormitorios}</p>
                    <p>Baños: {departamento.banos}</p>
                    <p>Precio: ${departamento.precio} por noche</p>
                    <p>Disponibilidad: {departamento.disponibilidad}</p>
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

export default Departamentos;
