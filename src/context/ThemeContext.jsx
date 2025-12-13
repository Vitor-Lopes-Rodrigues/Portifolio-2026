import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(localStorage.getItem('portfolio-theme') || 'space');

    useEffect(() => {

        const body = document.body;
        if (theme === 'gaming') {
            body.classList.add('theme-gaming');
        } else {
            body.classList.remove('theme-gaming');
        }
        // Salva a preferência do usuário
        localStorage.setItem('portfolio-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'space' ? 'gaming' : 'space'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};