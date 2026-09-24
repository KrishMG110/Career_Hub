import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("themValue") || "light",
  );

  const toggleTheme = () => {
    const newThem = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem("themValue",newThem)
    setTheme(newThem)
    
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={theme}>
{children}
        </div>
      
    </ThemeContext.Provider>
  );
};