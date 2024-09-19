import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Experiencia</h2>
      <div className="experience-item">
        <h3>Compañía X</h3>
        <p>Desarrollador Web (2022 - Presente)</p>
        <p>
          Trabajé en múltiples proyectos web, mejorando la experiencia de usuario y optimizando el rendimiento de las aplicaciones.
        </p>
      </div>
      <div className="experience-item">
        <h3>Compañía Y</h3>
        <p>Desarrollador Junior (2020 - 2022)</p>
        <p>
          Colaboré en el desarrollo de aplicaciones móviles y web, implementando funcionalidades críticas y aprendiendo de grandes equipos.
        </p>
      </div>
    </section>
  );
};

export default Experience;
