import React from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import AddTipoAlojamiento from '../Form/AddTipoAlojamiento';
import AddAlojamiento from '../Form/AddAlojamiento';
import '../estilosForms.css/styleAdministracion.css';

const Administracion = () => {
  const location = useLocation();

  return (
    <>
      <div>
        <h2 className='titulos-h2'>Administración del sitio</h2>
        <ul className='mini-nav'>
          <li className='nav-admin'>
            <Link to="./addTipoAlojamiento" className={location.pathname === '/addTipoAlojamiento' ? 'nav-link-form activo' : 'nav-link-form'}>Nuevo Tipo Alojamiento</Link>
          </li>
          <li className='nav-admin'>
            <Link to="./AddAlojamiento" className={location.pathname === '/AddAlojamiento' ? 'nav-link-form activo' : 'nav-link-form'}>Nuevo Alojamiento</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/addTipoAlojamiento" element={<AddTipoAlojamiento />} />
        <Route path="/AddAlojamiento" element={<AddAlojamiento />} />
      </Routes>
    </>
  );
};

export default Administracion;
