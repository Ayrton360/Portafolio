import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="header"
    >
      <div className="header-content">
        <h1>¡Hola, soy Ayrton!</h1>
        <p>Desarrollador Frontend | Fullstack Developer</p>
        <a href="#projects" className="btn">Ver Proyectos</a>
      </div>
    </motion.header>
  );
};

export default Header;
