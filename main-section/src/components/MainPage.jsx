import React from 'react';
import NowButton  from './NowButton';
const MainPage = ({ content, setCurrentPage }) => (
  
  <div className="page-container">
  <NowButton onClick={() => setCurrentPage('now')}/>
    
    <div className="content-wrapper">
      <h1 class = "title-main">this is alex's directory</h1>
      <div class = "title-sub">
        <p>known around also as gao, alexgaoth</p>
        <p>have a look around, there be something that interests u</p>
      
      <p class = "hidden">since ur on mobile, try holding on the sections to press them. </p>
      </div>
      
      <div className="grid-2col">
        {Object.entries(content).map(([key, data]) => (
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
    <div class ="footer">
      this page is written with React @2022 (now deprecated)
      <br></br>
      No rights reserved — this work by alex is free to use for any purpose.
    </div>
  </div>
);

export default MainPage;