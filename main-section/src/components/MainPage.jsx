import React from 'react';

const MainPage = ({ sampleData, setCurrentPage }) => (
  <div className="page-container">
    <div className="content-wrapper">
      <h1 class = "title-main">Welcome to Gao's Directory</h1>
      <p class = "title-sub">information still under relocation
      <br></br>
      also, if you're on mobile, try holding on the sections to press them.
      </p>
      
      <div className="grid-2col">
        {Object.entries(sampleData).map(([key, data]) => (
          <div
            key={key}
            onClick={() => setCurrentPage(key)}
            className="card"
          >
            <div className="card-image">
              <img 
                src={process.env.PUBLIC_URL + data.previewImage} 
                alt={`${data.title} preview`}
              />
            </div>
            <h2 className="title-card">{data.title}</h2>
            <p className="card-description">
              {key === 'resume' && "My professional experience and skills"}
              {key === 'projects' && "Creative projects funded by my relentless mind"}
              {key === 'thoughts' && "Ideas worth saying - maybe worth reading"}
              {key === 'quotes' && "The good and the bad"}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default MainPage;