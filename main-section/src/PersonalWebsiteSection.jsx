import React, { useState } from 'react';
import MainPage from './components/MainPage';
import ResumePage from './components/ResumePage';
import ProjectsPage from './components/ProjectsPage';
import ThoughtsPage from './components/ThoughtsPage';
import QuotesPage from './components/QuotesPage';
import { sampleData } from './data/sampleData';
import './styles/global.css';
import './styles/components.css';

const PersonalWebsiteSection = () => {
  const [currentPage, setCurrentPage] = useState('main');

  const renderPage = () => {
    switch(currentPage) {
      case 'resume': return <ResumePage data={sampleData.resume} setCurrentPage={setCurrentPage} />;
      case 'projects': return <ProjectsPage data={sampleData.projects} setCurrentPage={setCurrentPage} />;
      case 'thoughts': return <ThoughtsPage data={sampleData.thoughts} setCurrentPage={setCurrentPage} />;
      case 'quotes': return <QuotesPage data={sampleData.quotes} setCurrentPage={setCurrentPage} />;
      default: return <MainPage sampleData={sampleData} setCurrentPage={setCurrentPage} />;
    }
  };

  return renderPage();
};

export default PersonalWebsiteSection;