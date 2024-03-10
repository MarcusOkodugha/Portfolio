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
        <button style={{backgroundColor: "transparent", outline: "none", border: "none"}} onClick={toggleDarkMode}>
          <span className="material-symbols-outlined" style={{ color: darkMode ? "white" : "black" }}>
            {darkMode ? 'light_mode' : 'night_sight_max'}
          </span>
        </button>
      </div>
    )
}

export default ToggleDarkMode;