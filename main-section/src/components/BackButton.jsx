import React from 'react';
import { ArrowLeft } from 'lucide-react';

const BackButton = ({ setCurrentPage }) => (
  <div className="flex items-center mb-8">
    <button 
      onClick={() => setCurrentPage('main')}
      className="flex items-center space-x-2 hover:bg-black hover:text-white transition-all duration-300 p-2 border border-black"
    >
      <ArrowLeft size={20} />
      <span>Back</span>
    </button>
  </div>
);

export default BackButton;