import React, { useState, useRef, useCallback } from 'react';

const NowButton = ({ onClick }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const buttonRef = useRef(null);

  const updateGradientOrigin = useCallback(() => {
    if (!buttonRef.current) return;
    
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;
    
    // Set CSS custom properties for the gradient center point
    button.style.setProperty('--mouse-x', `${buttonCenterX}px`);
    button.style.setProperty('--mouse-y', `${buttonCenterY}px`);
    button.style.setProperty('--offset-x', `${buttonCenterX}px`);
    button.style.setProperty('--offset-y', `${buttonCenterY}px`);
  }, []);

  const handleMouseEnter = useCallback(() => {
    updateGradientOrigin();
  }, [updateGradientOrigin]);

  const handleClick = useCallback(() => {
    if (isAnimating) return; 
    
    // Update gradient origin immediately
    updateGradientOrigin();
    
    // Use double requestAnimationFrame to ensure CSS variables are applied before animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsAnimating(true);
        setTimeout(() => {
          onClick();
          setIsAnimating(false);
        }, 1800);
      });
    });
  }, [isAnimating, onClick, updateGradientOrigin]);

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      className={`btn-now ${isAnimating ? 'animating' : ''}`}
      disabled={isAnimating}
    >
      me - rn
    </button>
  );
};

export default NowButton;