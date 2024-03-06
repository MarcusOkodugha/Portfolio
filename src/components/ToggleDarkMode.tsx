import "../styles/ToggleDarkMode.css";
import React, { useState,useEffect } from "react";

function ToggleDarkMode(): React.ReactElement{

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.className = darkMode ? 'dark' : 'light';
    }, [darkMode]); 

    function toggleDarkMode(){
        setDarkMode(!darkMode);
    }

    

    

    return(
        <div>
            <button onClick={toggleDarkMode} style={{
                backgroundColor: darkMode ? 'green' : 'red',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
            }}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}

            </button>
        </div>
    )
}

export default ToggleDarkMode;