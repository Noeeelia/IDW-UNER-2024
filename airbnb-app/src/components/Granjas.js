import React from "react";
import { Link } from "react-router-dom";
import "../estilosForms.css/EstilosListaCards.css";

const Granjas = () => {
  const granjas = [
    {
      id: 1,
      img: "../images/granja1.png",
      alt: "granja",
      nombre: "Granja con molino y lago",
      descripcion: "Hermosa granja con molino y lago. Posée 2 dormitorios y 1 baño.",
      dormitorios: 2,
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
      img: "../images/granja2.png",
      alt: "granja",
      nombre: "Granja en la pradera",
      descripcion: "Bellísima granja en la pradera con 3 dormitorios y 2 baños.",
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
      id: 3,
      img: "../images/granja3.png",
      alt: "granja",
      nombre: "Granja boutique",
      descripcion: "Acogedora granja boutique con 2 dormitorios y 1 baño.",
      dormitorios: 2,
      banos: 1,
      latitud: -34.603684,
      longitud: -58.381559,
      precio: 150,
      disponibilidad: {
        texto: "Reservado",
        img: "../images/Icons/No24x24.svg"
      }
    },
  ];

  return (
    <section className="pages-catalogo">
        <h2 className="titulos-pages">Granjas</h2>
        <div className="boton-volver">
          <Link to="/" className="volver">Atrás</Link> 
        </div>
        <div className="cards-list">            
        {granjas.map((granja) => (
            <div className="card-list" key={granja.id}>
                <img src={granja.img} alt={granja.alt} />
                <div className="card-list-description">
                    <h2>{granja.nombre}</h2>
                    <p>{granja.descripcion}</p>

                    <div className="linea">
                      <img src="./images/Icons/habitacion.svg" className="icons-description" />  
                      <p>Dormitorios: {granja.dormitorios}</p>     
                    </div>

                    <div className="linea">
                      <img src="./images/Icons/bano.svg" className="icons-description" /> 
                      <p>Baños: {granja.banos}</p>
                    </div>

                    <div className="linea">
                      <img src="./images/Icons/precio.svg"
className="icons-description" /> 
                      <p>Precio: ${granja.precio} por noche</p>    
                    </div>
                    <div className="disponibilidad">
                      <img src={granja.disponibilidad.img} alt="disponibilidad" className="disponibilidad-icon" />
                      <p className="disponibilidad-text">{granja.disponibilidad.texto}</p>
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

export default Granjas;
