import React from 'react';
import { CarWidget } from '../CarWidget/CarWidget'; // Ajusta la ruta
import './NavBar.css'; // Asegúrate de que esta ruta sea correcta

export const NavBar = () => {
  return (
    <header>
      <h1>Ropa Online</h1>
      <nav>
        <li>Remeras</li>
        <li>Pantalones</li>
        <li>Zapatillas</li>
      </nav>
      <CarWidget />
    </header>
  );
};
