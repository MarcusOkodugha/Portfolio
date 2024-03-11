import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';
// import MarcusFullstackDeveloper from './assets/MarcusFullstackDeveloper.png';
// import MarcusFullstackDeveloperWhite from './assets/MarcusFullstackDeveloperWhite.png';
const Title: React.FC = () => {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <img 
            src={darkMode ? './assets/MarcusFullstackDeveloperWhite.png' : './assets/MarcusFullstackDeveloper.png'} 
            alt="Marcus Fullstack Developer" 
            style={{ width: '30rem', height: 'auto' }} 
        />
    );
};

export default Title;
