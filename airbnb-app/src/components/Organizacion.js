import React from "react";
import '../App.css';

const Organizacion = () => {
  return (
    <section className="container">
      <div className="container-quienes">
        <h2 className='titulos-h2'>¿Quiénes somos?</h2>
        <div className="cuadro-quienes">
          <p>
            Somos Airbnb, una plataforma en línea dedicada a facilitar el
            alquiler de alojamientos a corto plazo y a conectar a anfitriones y
            huéspedes de todo el mundo. Nos esforzamos por ofrecer una
            experiencia de viaje auténtica y personalizada, permitiendo a
            nuestros usuarios explorar nuevos destinos y sumergirse en culturas
            locales de manera única.
          </p>
        </div>

        <h2 className='titulos-h2'>Misión</h2>
        <div className="cuadro-quienes">
          <p>
            Nuestra misión es inspirar la exploración, fomentar la conexión
            humana y enriquecer las experiencias de viaje. Nos comprometemos a
            proporcionar una plataforma accesible y segura donde los anfitriones
            puedan compartir sus hogares y experiencias únicas, y donde los
            huéspedes puedan descubrir alojamientos acogedores y vivir aventuras
            memorables.
          </p>
        </div>

        <h2 className='titulos-h2'>Propósito</h2>
        <div className="cuadro-quienes">
          <p>
            En Airbnb, creemos en el poder de la hospitalidad y en la belleza de
            la diversidad cultural. Nos esforzamos por crear un mundo donde
            todos se sientan bienvenidos y valorados, donde las barreras se
            rompan y las conexiones se fortalezcan. Nuestro propósito es
            construir una comunidad global donde la gente pueda compartir,
            aprender y crecer juntos a través del intercambio de experiencias de
            viaje inolvidables.
          </p>
        </div>
      </div>
    </section>
  );
};


export default Organizacion;
