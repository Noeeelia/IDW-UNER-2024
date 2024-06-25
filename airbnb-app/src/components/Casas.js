import React from "react";
import { Link } from "react-router-dom";
import "../estilosForms.css/EstilosListaCards.css";

const Casas = () => {
  const casas = [
    {
      id: 1,
      img: "../images/casa1.png",
      alt: "casa",
      nombre: "Casa en la playa",
      descripcion: "Moderna casa con vista al mar. Posée 3 dormitorios y 2 baños.",
      dormitorios: 3,
      banos: 2,
      latitud: -34.603684,
      longitud: -58.381559,
      precio: 300,
      disponibilidad: {
        texto: "Disponible",
        img: "../images/Icons/Si24x24.svg"
      }
    },
    {
      id: 2,
      img: "../images/casa2.png",
      alt: "casa",
      nombre: "Casa en el bosque",
      descripcion: "Acogedora casa en el bosque con 2 dormitorios y 1 baño.",
      dormitorios: 2,
      banos: 1,
      latitud: -34.603684,
      longitud: -58.381559,
      precio: 150,
      disponibilidad: {
        texto: "Disponible",
        img: "../images/Icons/Si24x24.svg"
      }
    },
    {
      id: 3,
      img: "../images/casa3.png",
      alt: "casa",
      nombre: "Casa en los suburbios",
      descripcion: "Amplia casa en los suburbios con 3 dormitorios y 1 baño.",
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
        <h2 className="titulos-pages">Casas</h2>
        <div className="boton-volver">
          <Link to="/" className="volver">Atrás</Link> 
        </div>
        <div className="cards-list">            
        {casas.map((casa) => (
            <div className="card-list" key={casa.id}>
                <img src={casa.img} alt={casa.alt} />
                
                <div className="card-list-description">
                    <h2>{casa.nombre}</h2>
                    <p>{casa.descripcion}</p>
                  
                    <div className="linea">
                      <img src="./images/Icons/habitacion.svg" className="icons-description" />  
                      <p>Dormitorios: {casa.dormitorios}</p>     
                    </div>
                   
                    <div className="linea">
                      <img src="./images/Icons/bano.svg" className="icons-description" /> 
                      <p>Baños: {casa.banos}</p>
                    </div>

                    <div className="linea">
                      <img src="./images/Icons/precio.svg"
className="icons-description" /> 
                      <p>Precio: ${casa.precio} por noche</p>    
                    </div>
                    <div className="disponibilidad">
                      <img src={casa.disponibilidad.img} alt="disponibilidad" className="disponibilidad-icon" />
                      <p className="disponibilidad-text">{casa.disponibilidad.texto}</p>
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

export default Casas;


