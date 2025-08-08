import React from 'react';
import BackButton from './BackButton';

const ThoughtsPage = ({ data, setCurrentPage }) => (
  <div className="page-container">
    <div className="content-wrapper-narrow">
      <BackButton setCurrentPage={setCurrentPage} />

      <h1 className="title-page">Thoughts</h1>

      <div className="space-y-medium">
        {data.content.map((thought, index) => (
          <article key={index} className="article">
            <div className="article-header">
              <h2 className="title-article">{thought.title}</h2>
              <time className="date-badge">
                {thought.date}
              </time>
            </div>
            <p className="text-gray leading-relaxed">{thought.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  </div>
);

export default ThoughtsPage;