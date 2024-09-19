import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>
      <div className="project-grid">
        <div className="project-item">
          <img src="img/proyectos.png" alt="Project 1" />
          <h3>Proyecto 1</h3>
          <p>Proyecto sobre página de autos</p>
        </div>
        <div className="project-item">
          <img src="img/proyecto.png" alt="Project 2" />
          <h3>Proyecto 2</h3>
          <p>Proyecto sobre Lista de Tareas</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
