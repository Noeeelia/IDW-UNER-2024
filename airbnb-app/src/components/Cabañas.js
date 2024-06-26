import React from "react";
import { Link } from "react-router-dom";
import "../estilosForms.css/EstilosListaCards.css";

const Cabañas = () => {
  const cabañas = [
    {
      id: 1,
      img: "../images/cabana1.png",
      alt: "cabaña",
      nombre: "Cabaña al lago",
      descripcion: "Hermosa cabaña con vista al lago. Posée 1 dormitorio y 1 baño.",
      dormitorios: 1,
      banos: 1,
      latitud: -34.603684,
      longitud: -58.381559,
      precio: 200,
      disponibilidad: {
        texto: "Disponible",
        img: "../images/Icons/Si24x24.svg"
      }
    },
    {
      id: 2,
      img: "../images/cabana3.png",
      alt: "cabaña",
      nombre: "Cabaña en el bosque",
      descripcion: "Pequeña cabaña en el bosque con 1 dormitorio y 1 baño.",
      dormitorios: 1,
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
      img: "../images/cabana2.png",
      alt: "cabaña",
      nombre: "Cabaña en la montaña",
      descripcion: "Espaciosa cabaña a los pies de las montañas con 2 dormitorios y 1 baño.",
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
  ];

  return (
    <section className="pages-catalogo">
        <h2 className="titulos-pages">Cabañas</h2>
        <div className="boton-volver">
          <Link to="/" className="volver">Atrás</Link> 
        </div>
        <div className="cards-list">            
        {cabañas.map((cabaña) => (
            <div className="card-list" key={cabaña.id}>
                <img src={cabaña.img} alt={cabaña.alt} />
                <div className="card-list-description">
                    <h2>{cabaña.nombre}</h2>
                    <p>{cabaña.descripcion}</p>

                    <div className="linea">
                      <img src="./images/Icons/habitacion.svg" className="icons-description" />  
                      <p>Dormitorios: {cabaña.dormitorios}</p>     
                    </div>

                    <div className="linea">
                      <img src="./images/Icons/bano.svg" className="icons-description" /> 
                      <p>Baños: {cabaña.banos}</p>
                    </div>

                    <div className="linea">
                      <img src="./images/Icons/precio.svg"
className="icons-description" /> 
                      <p>Precio: ${cabaña.precio} por noche</p>    
                    </div>
                    <div className="disponibilidad">
                      <img src={cabaña.disponibilidad.img} alt="disponibilidad" className="disponibilidad-icon" />
                      <p className="disponibilidad-text">{cabaña.disponibilidad.texto}</p>
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

export default Cabañas;
