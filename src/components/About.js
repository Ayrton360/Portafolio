import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>Acerca de mí</h2>
      <p>
        Soy un desarrollador apasionado por crear aplicaciones web funcionales y atractivas. Me especializo en tecnologías modernas como React, Node.js, y más.
      </p>
      <ul className="skills-list">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>CSS</li>
        <li>HTML</li>
      </ul>
    </section>
  );
};

export default About;
