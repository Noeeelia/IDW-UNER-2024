import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Contacto from './components/Contacto';
import Footer from './components/Footer';




function App() {

  return (
    <div className="App">
      <NavBar />
      <Home /> 
      <Contacto/> 
      <Footer /> 
      
    </div>
  );
};

export default App;
