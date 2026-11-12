import React, { createContext, useState, useEffect, useContext } from 'react';
import { translations } from '../constants/translations';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState(localStorage.getItem('portfolio-language') || 'pt');

    useEffect(() => {
        localStorage.setItem('portfolio-language', language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'pt' ? 'en' : 'pt'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};
