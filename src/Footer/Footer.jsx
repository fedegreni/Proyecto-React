// src/Componentes/Footer/Footer.js
import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} - Drip. Todos los derechos reservados.</p>
      <p>Síguenos en:</p>
      <ul>
        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='btn-redes'>Facebook</a></li>
        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='btn-redes'>Twitter</a></li>
        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='btn-redes'>Instagram</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
