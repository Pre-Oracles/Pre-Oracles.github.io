import React from 'react';

const MainPage = ({ sampleData, setCurrentPage }) => (
  <div className="page-container">
    <div className="content-wrapper">
      <h1 className="title-main">Welcome</h1>
      
      <div className="grid-2col">
        {Object.entries(sampleData).map(([key, data]) => (
          <div
            key={key}
            onClick={() => setCurrentPage(key)}
            className="card"
          >
            <div className="card-image">
              <img 
                src={data.previewImage} 
                alt={`${data.title} preview`}
              />
            </div>
            <h2 className="title-card">{data.title}</h2>
            <p className="card-description">
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