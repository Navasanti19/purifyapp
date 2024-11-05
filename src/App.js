// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calculadora from './components/Calculadora/Calculadora';
import Plano from './components/Plano/Plano';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header-principal">
          <h1>Purify Road</h1>
          <nav className="navbar">
            <Link to="/calculadora">Calculadora</Link>
            <Link to="/planos">Planos</Link>
          </nav>
        </header>
        
        <Routes>
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/planos" element={<Plano />} />
          <Route path="/" element={<Calculadora />} /> {/* Ruta por defecto */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
