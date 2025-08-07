import React from 'react';
import BackButton from './BackButton';

const ResumePage = ({ data, setCurrentPage }) => (
  <div className="min-h-screen bg-white text-black p-4 md:p-8">
    <div className="max-w-4xl mx-auto">
      <BackButton setCurrentPage={setCurrentPage} />

      <h1 className="text-4xl font-bold mb-12">Resume</h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">Experience</h2>
          {data.content.experience.map((job, index) => (
            <div key={index} className="mb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <span className="text-sm bg-black text-white px-3 py-1 mt-2 md:mt-0">{job.period}</span>
              </div>
              <p className="font-medium mb-2">{job.company}</p>
              <p className="text-gray-600">{job.description}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {data.content.skills.map((skill, index) => (
              <span key={index} className="border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-all duration-300">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">Education</h2>
          <div>
            <h3 className="text-xl font-semibold">{data.content.education.degree}</h3>
            <p className="font-medium">{data.content.education.institution}</p>
            <p className="text-gray-600">{data.content.education.year}</p>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default ResumePage;