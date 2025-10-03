import React from 'react';
import BackButton from './BackButton';

const ResumePage = ({ data, setCurrentPage }) => (
  <div className="page-container">
    <div className="content-wrapper-narrow">
      <BackButton setCurrentPage={setCurrentPage} />

      <h1 className="title-page">Resume</h1>
      <p className='mb-small'>
            To view my proper resume here: {" "}
            <a href = "/resume.pdf" target="_blank" rel="noopener noreferrer"> view resume</a>
          </p>
      <div className="space-y-large">     
        <section>
          <h2 className="title-section">Experience</h2>
          {data.content.experience.map((job, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3 className="experience-role">{job.role}</h3>
                <span className="experience-period">{job.period}</span>
              </div>
              <p className="font-medium mb-small">{job.company}</p>
              <p className="text-gray">{job.description}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="title-section">Skills</h2>
          <div className="skills-grid">
            {data.content.skills.map((skill, index) => (
              <span key={index} className="tag-white">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="title-section">Education</h2>
          <div>
            {data.content.education.map((study_experience, index) => (
            <div key={index} className="experience-item">
              <h3 className="text-xl font-semibold">{study_experience.degree}</h3>
              <p className="font-medium">{study_experience.institution}</p>
              <p className="text-gray">{study_experience.year}</p>
            </div>
            ))}
            
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default ResumePage;