import React from 'react'

const Home = () => {

  return (
    <section class="container">
        <div class="container-alojamientos">
            <h2>Alojamientos</h2>
            <h5>Diseñados para tu confort, asegurando descanso y disfrute en completa comodidad</h5>
        </div>

        <!--Cards  -->
        <div class="cards">
            <div class="card" />
                <img src="images/img-casa.png" alt="casas" />
                <h2>Casas</h2>
            </div>


        <div class="card">
            <img src="images/img-Departamentos.png" alt="departamentos" />
            <h2>Departamentos</h2>
        </div>

        <div class="card">
            <img src="images/img-cabañas.png" alt="cabañas" />  
            <h2>Cabañas</h2>
            </div>


        <div class="card">
            <img src="images/img-Habitaciones.png" alt="habitaciones" />
            <h2>Habitaciones</h2>
            </div>

            <div class="card">
                <img src="images/img-Granja.png" alt="habitaciones" />
                <h2>Granjas</h2>
            </div>

            <div class="card">
                <img src="images/img-Mansión.png" alt="habitaciones" />
                <h2>Mansiones</h2>
                </div>
        </div>
        </div>
    </section>
  )
}
