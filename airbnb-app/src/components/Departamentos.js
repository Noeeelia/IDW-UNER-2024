import React from "react";
import { Link } from "react-router-dom";
import "../estilosForms.css/EstilosListaCards.css";

const Departamentos = () => {
  const departamentos = [
    {
      id: 1,
      img: "../images/dpto1.png",
      alt: "departamento",
      nombre: "Departamento en la ciudad",
      descripcion: "Moderno departamento en la ciudad con 1 dormitorio y 1 baño.",
      dormitorios: 1,
      banos: 1,
      latitud: -34.603684,
      longitud: -58.381559,
      precio: 200,
      disponibilidad: {
        texto: "Reservado",
        img: "../images/Icons/No24x24.svg"
      }
    },
    {
      id: 2,
      img: "../images/dpto2.png",
      alt: "departamento",
      nombre: "Departamento frente a la playa",
      descripcion: "Luminoso departamento con vista a la playa. Posée 2 dormitorios y 1 baño.",
      dormitorios: 2,
      banos: 1,
      latitud: -34.603684,
      longitud: -58.381559,
      precio: 300,
      disponibilidad: {
        texto: "Disponible",
        img: "../images/Icons/Si24x24.svg"
      }
    },
    {
      id: 3,
      img: "../images/dpto3.png",
      alt: "departamento",
      nombre: "Departamento en zona céntrica",
      descripcion: "Departamento estilo colonial en el centro de la ciudad con 3 dormitorios y 1 baño.",
      dormitorios: 3,
      banos: 1,
      latitud: -34.603684,
      longitud: -58.381559,
      precio: 300,
      disponibilidad: {
        texto: "Reservado",
        img: "../images/Icons/No24x24.svg"
      }
    },
  ];

  return (
    <section className="pages-catalogo">
        <h2 className="titulos-pages">Departamentos</h2>
        <div className="boton-volver">
          <Link to="/" className="volver">Atrás</Link> 
        </div>
        <div className="cards-list">            
        {departamentos.map((departamento) => (
            <div className="card-list" key={departamento.id}>
                <img src={departamento.img} alt={departamento.alt} />
                <div className="card-list-description">
                    <h2>{departamento.nombre}</h2>
                    <p>{departamento.descripcion}</p>

                    <div className="linea">
                      <img src="./images/Icons/habitacion.svg" className="icons-description" />  
                      <p>Dormitorios: {departamento.dormitorios}</p>     
                    </div>

                    <div className="linea">
                      <img src="./images/Icons/bano.svg" className="icons-description" /> 
                      <p>Baños: {departamento.banos}</p>
                    </div>

                    <div className="linea">
                      <img src="./images/Icons/precio.svg"
className="icons-description" /> 
                      <p>Precio: ${departamento.precio} por noche</p>    
                    </div>
                    <div className="disponibilidad">
                      <img src={departamento.disponibilidad.img} alt="disponibilidad" className="disponibilidad-icon" />
                      <p className="disponibilidad-text">{departamento.disponibilidad.texto}</p>
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

export default Departamentos;