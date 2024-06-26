/*import React from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import AddTipoAlojamiento from '../Form/AddTipoAlojamiento';
import AddAlojamiento from '../Form/AddAlojamiento';
import EditarImagen from '../Form/EditarImagen';
import '../estilosForms.css/styleAdministracion.css';
import AddServicio from '../Form/AddServicio';

const Administracion = () => {
  const location = useLocation();

  return (
    <>
      <div>
        <h2 className='titulos-h2'>Administración del sitio</h2>
        <ul className='mini-nav'>
          <li className='nav-admin'>
            <Link to="./AddTipoAlojamiento" className={location.pathname === '/AddTipoAlojamiento' ? 'nav-link-form activo' : 'nav-link-form'}>Nuevo Tipo Alojamiento</Link>
          </li>
          <li className='nav-admin'>
            <Link to="./AddAlojamiento" className={location.pathname === '/AddAlojamiento' ? 'nav-link-form activo' : 'nav-link-form'}>Nuevo Alojamiento</Link>
          </li>
          <li className='nav-admin'>
            <Link to="./EditarImagen" className={location.pathname === '/EditarImagen' ? 'nav-link-form activo' : 'nav-link-form'}>Manejo de Imagenes</Link>
          </li>
          <li className='nav-admin'>
            <Link to="./AddServicio" className={location.pathname === '/AddServicio' ? 'nav-link-form activo' : 'nav-link-form'}>Agregar Servicio</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/addTipoAlojamiento" element={<AddTipoAlojamiento />} />
        <Route path="/AddAlojamiento" element={<AddAlojamiento />} />
        <Route path="/EditarImagen" element={<EditarImagen />} />
        <Route path="/AddServicio" element={<AddServicio/>}/>
      </Routes>
    </>
  );
};

export default Administracion;*/
