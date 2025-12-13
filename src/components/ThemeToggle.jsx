import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Gamepad2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative w-16 h-8 flex items-center bg-tertiary rounded-full p-1 cursor-pointer border border-neon-purple/30 overflow-hidden group"
            aria-label="Toggle Theme"
        >
            {/* Fundo animado do switch */}
            <div className={`absolute inset-0 bg-neon-purple opacity-20 transition-opacity duration-500 ${theme === 'gaming' ? 'bg-accent-main' : ''} group-hover:opacity-40`}></div>

            {/* O círculo que se move */}
            <motion.div
                className="bg-neon-purple w-6 h-6 rounded-full shadow-md z-10 flex items-center justify-center text-white"
                animate={{
                    x: theme === 'space' ? 0 : 32, // Move 32px para a direita se for gaming
                    backgroundColor: theme === 'space' ? 'var(--accent-main)' : 'var(--accent-main)', // Garante que usa a cor da variável atual
                }}
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
            >
                {/* Ícone condicional com animação de rotação */}
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: theme === 'space' ? 0 : 360 }}
                    transition={{ duration: 0.5 }}
                >
                    {theme === 'space' ? (
                        <Rocket size={14} className="text-bg-primary" />
                    ) : (
                        <Gamepad2 size={14} className="text-bg-primary" />
                    )}
                </motion.div>
            </motion.div>
        </button>
    );
};

export default ThemeToggle;