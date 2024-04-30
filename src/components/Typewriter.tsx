import '../styles/Title.css';
import React, {useState, useEffect} from 'react';
import { TypeAnimation } from 'react-type-animation';

function Typewriter() {

    const [showCursor, setShowCursor] = useState(true);


    useEffect(()=>{
        const timer = setTimeout(()=>{
            setShowCursor(false);
        },17000);

        return () => clearTimeout(timer);
    },[]);



    return (
        <div className='title'>
            <div className='main-title-text' >
                Hi, I'm Marcus.
            </div>
            {showCursor?
            <TypeAnimation
            sequence={[
                'Im a software developer.', 
                2000, 
                'Welcome to my portfolio page.', 
                2000,
                'Feel free to browse my projects.',
            ]}
            wrapper="span"
            cursor={showCursor}
            repeat={0}
            speed={40}
            deletionSpeed={60}
            className='main-title-text'
            />:<div className='main-title-text'>
            Feel free to browse my projects.
        </div>}
            
        </div>
      );


}

export default Typewriter