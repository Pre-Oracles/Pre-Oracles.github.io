import React from 'react';
import BackButton from './BackButton';

const ProjectsPage = ({ data, setCurrentPage }) => (
  <div className="min-h-screen bg-white text-black p-4 md:p-8">
    <div className="max-w-4xl mx-auto">
      <BackButton setCurrentPage={setCurrentPage} />

      <h1 className="text-4xl font-bold mb-12">Things That I've Made</h1>

      <div className="grid gap-8">
        {data.content.map((project, index) => (
          <div key={index} className="border-2 border-black p-6 hover:bg-gray-50 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-3">{project.name}</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.split(', ').map((tech, techIndex) => (
                <span key={techIndex} className="bg-black text-white px-3 py-1 text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectsPage;