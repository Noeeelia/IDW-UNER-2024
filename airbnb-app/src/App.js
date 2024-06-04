import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import Contacto from './components/Contacto';


function App() {

  return (
    <div className="App">
      <NavBar />
      <Home /> 
      <Footer /> 
      <Contacto/> 
    </div>
  );
};

export default App;
