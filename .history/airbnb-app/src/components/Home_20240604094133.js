import React from 'react';
import '../App.css';

const Home = () => {

  return (
    <section class="container">
        <div class="container-alojamientos">
            <h2>Alojamientos</h2>
            <h4>Diseñados para tu confort, asegurando descanso y disfrute en completa comodidad</h4>
        </div>

        <div class="cards">
            <div class="card">
                <img src="./images/img-casa.png" alt="casas" />
                <h2>Casas</h2>
            </div>

            <div class="card">
                <img src="./images/img-Deptos.png" alt="departamentos" />
                <h2>Departamentos</h2>
            </div>

            <div class="card">
                <img src="./images/img-cabañas.png" alt="cabañas" />  
                <h2>Cabañas</h2>
            </div>

            <div class="card">
                <img src="./images/img-Habitaciones.png" alt="habitaciones" />
                <h2>Habitaciones</h2>
            </div>

            <div class="card">
                <img src="./images/img-Granja.png" alt="Granjas" />
                <h2>Granjas</h2>
            </div>

            <div class="card">
                <img src="./images/img-Mansión.png" alt="Mansiones" />
                <h2>Mansiones</h2>
            </div>
        </div>
    </section>
  );
};

export default Home;