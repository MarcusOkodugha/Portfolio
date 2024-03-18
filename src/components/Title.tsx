import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';
// import MarcusFullstackDeveloper from './assets/MarcusFullstackDeveloper.png';
// import MarcusFullstackDeveloperWhite from './assets/MarcusFullstackDeveloperWhite.png';
import '../styles/Title.css';
const Title: React.FC = () => {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <img 
            className="title"
            src={darkMode ? './assets/MarcusFullstackDeveloperWhite.png' : './assets/MarcusFullstackDeveloper.png'} 
            alt="Marcus Fullstack Developer" 
        />
    );
};

export default Title;
