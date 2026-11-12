import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="relative w-16 h-8 flex items-center bg-tertiary rounded-full p-1 cursor-pointer border border-neon-purple/30 overflow-hidden group"
            aria-label="Toggle Language"
        >
            <div className="absolute inset-0 bg-neon-purple opacity-20 transition-opacity duration-500 group-hover:opacity-40" />

            <motion.div
                className="bg-neon-purple w-6 h-6 rounded-full shadow-md z-10 flex items-center justify-center text-[9px] font-bold text-primary"
                animate={{ x: language === 'pt' ? 0 : 32 }}
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
            >
                {language === 'pt' ? 'PT' : 'EN'}
            </motion.div>
        </button>
    );
};

export default LanguageToggle;
