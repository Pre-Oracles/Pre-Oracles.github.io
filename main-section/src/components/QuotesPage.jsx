import React from 'react';
import BackButton from './BackButton';

const QuotesPage = ({ data, setCurrentPage }) => (
  <div className="page-container">
    <div className="content-wrapper-narrow">
      <BackButton setCurrentPage={setCurrentPage} />

      <h1 className="title-page">Quotes</h1>

      <div className="space-y-large">
        {data.content.map((item, index) => (
          <blockquote key={index} className="quote-block">
            <p className="quote-text">
              "{item.quote}"
            </p>
            <cite className="quote-author">— {item.author}</cite>
          </blockquote>
        ))}
      </div>
    </div>
  </div>
);

export default QuotesPage;