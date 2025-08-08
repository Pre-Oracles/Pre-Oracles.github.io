import React from 'react';
import BackButton from './BackButton';

const ProjectsPage = ({ data, setCurrentPage }) => (
  <div className="page-container">
    <div className="content-wrapper-narrow">
      <BackButton setCurrentPage={setCurrentPage} />

      <h1 className="title-page">Things That I've Made</h1>

      <div className="grid-1col">
        {data.content.map((project, index) => (
          <div key={index} className="project-card">
            <img src={"https://via.placeholder.com/400x225/f8f8f8/333?text=Resume+Preview"}></img>
            <h2 className="title-card">{project.name}</h2>
            <div className="flex flex-wrap gap-small mb-medium">
              {project.tech.split(', ').map((tech, techIndex) => (
                <span key={techIndex} className="tag">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectsPage;