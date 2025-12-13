import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { navLinks } from '../assets/constants/index.js';
import ThemeToggle from './ThemeToggle';
// 1. IMPORTAR O CONTEXTO DO TEMA
import { useTheme } from '../context/ThemeContext';

const GamerModeTooltip = () => (
    <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }} // Adicionei animação de saída suave
        transition={{
            duration: 0.5,
            delay: 1.5,
            type: "spring",
            stiffness: 200
        }}
        className="absolute top-12 right-0 w-max pointer-events-none"
    >
        <div className="relative bg-gradient-to-r from-neon-purple to-blue-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-[0_0_15px_#915eff] border border-white/20">
            <div className="absolute -top-1 right-6 w-2 h-2 bg-neon-purple rotate-45 border-t border-l border-white/20"></div>
            <span className="flex items-center gap-1">
                Modo Gamer <span className="animate-bounce">🎮</span>
            </span>
        </div>
    </motion.div>
);

const Navbar = () => {
    const [active, setActive] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const [toggle, setToggle] = useState(false);

    // 2. PEGAR O TEMA ATUAL
    const { theme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
                scrolled ? "bg-primary shadow-lg border-b border-white/5" : "bg-transparent"
            }`}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto px-6'>
                <a
                    href='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <p className='text-white text-[18px] font-bold cursor-pointer flex'>
                        Vitor &nbsp;
                        <span className='sm:block hidden'> | Full Stack Dev</span>
                    </p>
                </a>

                {/* --- MENU DESKTOP --- */}
                <ul className='list-none hidden sm:flex flex-row gap-10 items-center'>
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${
                                active === link.title ? "text-white" : "text-secondary"
                            } hover:text-white text-[18px] font-medium cursor-pointer transition-colors`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}

                    <li className="border-l border-white/20 pl-8 relative group">
                        <ThemeToggle />
                        {/* 3. CONDIÇÃO: SÓ MOSTRA SE O TEMA FOR 'SPACE' */}
                        {theme === 'space' && <GamerModeTooltip />}
                    </li>
                </ul>

                {/* --- MENU MOBILE --- */}
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <div
                        className="w-[28px] h-[28px] object-contain cursor-pointer text-white z-30 relative"
                        onClick={() => setToggle(!toggle)}
                    >
                        {toggle ? <X size={28} /> : <Menu size={28} />}
                    </div>

                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 bg-tertiary/95 backdrop-blur-md absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-20 rounded-xl border border-white/10 shadow-card`}
                    >
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`font-medium cursor-pointer text-[16px] ${
                                        active === link.title ? "text-white" : "text-secondary"
                                    }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.title);
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}

                            <li className="w-full pt-4 border-t border-white/10 flex justify-center mt-2 relative">
                                <ThemeToggle />
                                {/* 4. MESMA CONDIÇÃO NO MOBILE */}
                                {theme === 'space' && (
                                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-max">
                                        <div className="bg-neon-purple text-white text-[10px] px-2 py-1 rounded animate-bounce">
                                            Modo Gamer 🎮
                                        </div>
                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;