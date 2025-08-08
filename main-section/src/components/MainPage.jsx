import React from 'react';

const MainPage = ({ sampleData, setCurrentPage }) => (
  <div className="min-h-screen bg-white text-black p-4 md:p-8">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">Welcome to Gao's Directory</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {Object.entries(sampleData).map(([key, data]) => (
          <div
            key={key}
            onClick={() => setCurrentPage(key)}
            className="cursor-pointer group border-2 border-black hover:bg-black hover:text-white transition-all duration-300 p-6"
          >
            <div className="aspect-video mb-4 overflow-hidden">
              <img 
                src={data.previewImage} 
                alt={`${data.title} preview`}
                className="w-full h-full object-cover group-hover:invert transition-all duration-300"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
            <p className="text-sm opacity-70">
              {key === 'resume' && "Professional experience and skills"}
              {key === 'projects' && "Creative projects and technical work"}
              {key === 'thoughts' && "Personal reflections and insights"}
              {key === 'quotes' && "Inspiring words and wisdom"}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default MainPage;