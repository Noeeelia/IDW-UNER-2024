import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Organizacion from './components/Organizacion';
import Contacto from './components/Contacto';
import Administracion from './components/Administracion';
import Footer from './components/Footer';
import Casas from './components/Casas';
import Departamentos from './components/Departamentos';
import Cabañas from './components/Cabañas';
import Habitaciones from './components/Habitaciones';
import Mansiones from './components/Mansiones';
import Granjas from './components/Granjas';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />  
    </>
  );
};

const App = () => {

  return (
      <Router>
        <Routes>
          <Route path='/' exact element={<Layout><Home /></Layout>} />
          <Route path='/organizacion' element={<Layout><Organizacion /></Layout>} />
          <Route path='/contacto' element={<Layout><Contacto/></Layout>} />
          <Route path='/administracion' element={<Layout><Administracion/></Layout>} />
          
          <Route path='/casas' element={<Layout><Casas/></Layout>} />
      
          
          <Route path='/departamentos' element={<Layout><Departamentos/></Layout>} />
          <Route path='/cabanas' element={<Layout><Cabañas/></Layout>} />
          <Route path='/habitaciones' element={<Layout><Habitaciones/></Layout>} />
          <Route path='/mansiones' element={<Layout><Mansiones/></Layout>} />
          <Route path='/granjas' element={<Layout><Granjas/></Layout>} />
        </Routes>
      </Router>   
  );
};

export default App;