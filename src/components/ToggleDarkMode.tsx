import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';

const ToggleDarkMode: React.FC = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <button 
      style={{ backgroundColor: 'transparent', outline: 'none', border: 'none' }} 
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
