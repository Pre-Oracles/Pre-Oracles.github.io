import React, { useState } from 'react';

const NowButton = ({ onClick }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isAnimating) return; 
    
    setIsAnimating(true);
    setTimeout(() => {
      onClick();
      setIsAnimating(false);
    }, 1800); 
  };

  return (
    <button
      onClick={handleClick}
      className={`btn-now ${isAnimating ? 'animating' : ''}`}
      disabled={isAnimating}
    >
      me - rn
    </button>
  );
};

export default NowButton;