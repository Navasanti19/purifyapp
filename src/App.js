// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calculadora from './components/Calculadora/Calculadora';
import Plano from './components/Plano/Plano';
import Home from './components/Home/Home';
import Costos from './components/Costos/Costos';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header-principal">
          <h1>Purify Road</h1>
          <nav className="navbar">
            <Link to="/">Inicio</Link>
            <Link to="/calculadora">Calculadora</Link>
            <Link to="/planos">Planos</Link>
            <Link to="/costos">Costos</Link>
          </nav>
        </header>
        
        <Routes>
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/planos" element={<Plano />} />
          <Route path="/" element={<Home />} /> {/* Ruta por defecto */}
          <Route path="/costos" element={<Costos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
