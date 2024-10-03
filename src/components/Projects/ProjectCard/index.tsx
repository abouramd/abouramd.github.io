import React from 'react';
import './index.css';
import { FaLink } from 'react-icons/fa6';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  sourceCodeLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  sourceCodeLink = '#'
}) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-technologies">
        {/* <h4>Technologies used:</h4> */}
        <ul>
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer" className="source-code-link">
        <FaLink /> View Source Code
      </a>
    </div>
  );
};

export default ProjectCard;
