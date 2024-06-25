import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <section className="container">
      <div className="container-alojamientos">
        <h2>Alojamientos</h2>
        <h4>Diseñados para tu confort, asegurando descanso y disfrute en completa comodidad.</h4>
      </div>
      <div className="cards">
        <div className="card">
          <Link to="/casas" >
            <img src="./images/img-Casa.png" alt="casas" />
            <h2>Casas</h2>
          </Link>
        </div>
        <div className="card">
          <Link to="/departamentos">
            <img src="./images/img-Depto.png" alt="departamentos" />
            <h2>Departamentos</h2>
          </Link>
        </div>
        <div className="card">
          <Link to="/cabanas">
            <img src="./images/img-Cabaña.png" alt="cabañas" />
            <h2>Cabañas</h2>
          </Link>
        </div>
        <div className="card">
          <Link to="/habitaciones">
            <img src="./images/img-Habitacion.png" alt="habitaciones" />
            <h2>Habitaciones</h2>
          </Link>
        </div>
        <div className="card">
          <Link to="/granjas">
            <img src="./images/img-Granja.png" alt="Granjas" />
            <h2>Granjas</h2>
          </Link>
        </div>
        <div className="card">
          <Link to="/mansiones">
            <img src="./images/img-Mansion.png" alt="Mansiones" />
            <h2>Mansiones</h2>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;