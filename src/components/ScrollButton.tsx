import '../styles/ScrollButton.css';
import React from 'react';

type ScrollButtonProps = {
  direction: 'left' | 'right';
  onClick: () => void;
};

const ScrollButton: React.FC<ScrollButtonProps> = ({ direction, onClick }) => {
    const className = direction === 'left' ? 'scroll-button-left' : 'scroll-button-right';
  return (
    <button className={className} onClick={onClick}>
      {direction === 'left' ? <span style={{scale:"1.5"}} className="material-symbols-outlined">chevron_left</span> : <span style={{scale:"1.5"}} className="material-symbols-outlined">chevron_right</span>}
    </button>
  );
};

export default ScrollButton;
