// src/contexts/DarkModeContext.tsx
import React, { createContext, useState, useEffect } from 'react';

export const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
