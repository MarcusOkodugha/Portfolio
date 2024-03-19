import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';
import '../styles/Title.css';
const Title: React.FC = () => {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className='title'>
            <img className='title-img'
                src={darkMode ? './assets/MarcusFullstackDeveloperWhite.png' : './assets/MarcusFullstackDeveloper.png'} 
                alt="Marcus Fullstack Developer" 
            />
        </div>
    );
};

export default Title;
