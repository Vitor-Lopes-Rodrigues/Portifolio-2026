import React, { useEffect, useState } from 'react';
import { navLinks } from '../assets/constants/index.js'; // Certifique-se que o constants/index.js existe

const Navbar = () => {
    const [active, setActive] = useState('');
    const [scrolled, setScrolled] = useState(false);

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
                scrolled ? "bg-primary shadow-lg" : "bg-transparent"
            }`}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto px-6'>
                {/* Logo / Nome */}
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

                {/* Links Desktop */}
                <ul className='list-none hidden sm:flex flex-row gap-10'>
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
                </ul>

                {/* Menu Mobile (Simplificado) */}
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    {/* Você pode adicionar um ícone de menu aqui depois */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;