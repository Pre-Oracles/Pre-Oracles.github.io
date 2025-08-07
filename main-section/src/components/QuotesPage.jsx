import React from 'react';
import BackButton from './BackButton';

const QuotesPage = ({ data, setCurrentPage }) => (
  <div className="min-h-screen bg-white text-black p-4 md:p-8">
    <div className="max-w-4xl mx-auto">
      <BackButton setCurrentPage={setCurrentPage} />

      <h1 className="text-4xl font-bold mb-12">Quotes</h1>

      <div className="space-y-12">
        {data.content.map((item, index) => (
          <blockquote key={index} className="border-l-4 border-black pl-8">
            <p className="text-2xl md:text-3xl font-light mb-4 italic leading-relaxed">
              "{item.quote}"
            </p>
            <cite className="text-lg font-semibold">— {item.author}</cite>
          </blockquote>
        ))}
      </div>
    </div>
  </div>
);

export default QuotesPage;