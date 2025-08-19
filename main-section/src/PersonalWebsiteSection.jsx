import React, { useState } from 'react';
import MainPage from './components/MainPage';
import ResumePage from './components/ResumePage';
import ProjectsPage from './components/ProjectsPage';
import ThoughtsPage from './components/ThoughtsPage';
import QuotesPage from './components/QuotesPage';
import NowPage from './components/NowPage';
import { content } from './data/content';
import { getNowData } from './data/nowData';
import './styles/global.css';
import './styles/components.css';
import './styles/bookshelf.css';

const PersonalWebsiteSection = () => {
  const [currentPage, setCurrentPage] = useState('main');

  const renderPage = () => {
    switch(currentPage) {
      case 'now': return <NowPage data ={getNowData} setCurrentPage={setCurrentPage}/>
      case 'resume': return <ResumePage data={content.resume} setCurrentPage={setCurrentPage} />;
      case 'projects': return <ProjectsPage data={content.projects} setCurrentPage={setCurrentPage} />;
      case 'thoughts': return <ThoughtsPage data={content.thoughts} setCurrentPage={setCurrentPage} />;
      case 'quotes': return <QuotesPage data={content.quotes} setCurrentPage={setCurrentPage} />;
      default: return <MainPage content={content} setCurrentPage={setCurrentPage} />;
    }
  };

  return renderPage();
};

export default PersonalWebsiteSection;