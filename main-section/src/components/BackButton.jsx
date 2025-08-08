import React from 'react';
import { ArrowLeft } from 'lucide-react';

const BackButton = ({ setCurrentPage }) => (
  <button 
    onClick={() => setCurrentPage('main')}
    className="btn-back"
  >
    <ArrowLeft size={20} />
    <span>Back</span>
  </button>
);

export default BackButton;