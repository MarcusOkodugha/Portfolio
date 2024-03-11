import '../styles/Technologies.css';
import React from 'react';
import { TechnologyProps } from '../types';

interface TechnologiesProps {
  technologies: TechnologyProps[];
}
const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
 
    return (
    <div className="technologies-grid">
      {technologies.map((tech, index) => (
        <div key={index} className="technology-item">
          <img src={tech.imgPath} alt={tech.title} className="technology-icon" />
          <span className="technology-title">{tech.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Technologies;
