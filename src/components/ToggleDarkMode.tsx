import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';

const ToggleDarkMode: React.FC = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <button 
      style={{ outline: 'none', border: 'none' }} className='icon-button' 
      onClick={toggleDarkMode}
    >
      <span 
        className="material-symbols-outlined" 
        style={{ color: darkMode ? 'white' : 'black' }}
      >
        {darkMode ? 'light_mode' : 'night_sight_max'}
      </span>
    </button>
  );
};

export default ToggleDarkMode;
