import React from 'react';
import BackButton from './BackButton';

const ThoughtsPage = ({ data, setCurrentPage }) => (
  <div className="min-h-screen bg-white text-black p-4 md:p-8">
    <div className="max-w-4xl mx-auto">
      <BackButton setCurrentPage={setCurrentPage} />

      <h1 className="text-4xl font-bold mb-12">Thoughts</h1>

      <div className="space-y-8">
        {data.content.map((thought, index) => (
          <article key={index} className="border-b border-gray-300 pb-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <h2 className="text-2xl font-bold">{thought.title}</h2>
              <time className="text-sm bg-black text-white px-3 py-1 mt-2 md:mt-0">
                {thought.date}
              </time>
            </div>
            <p className="text-gray-600 leading-relaxed">{thought.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  </div>
);

export default ThoughtsPage;