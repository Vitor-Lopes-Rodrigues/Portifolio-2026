import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, useTheme } from './context/ThemeContext';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import StarsCanvas from './components/canvas/Stars';
import Tech from './components/Tech';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import ComingSoon from './components/ComingSoon';

// Widgets
import SpotifyCard from "./components/SpotifyCard";
import NasaCard from "./components/NasaCard";
import DiscordCard from "./components/DiscordCard";
import QuoteCard from "./components/QuoteCard";
import GamingVideoBackground from "./components/GamingVideoBackground.jsx";

const AppContent = () => {
    const { theme } = useTheme();
    console.log("TEMA ATUAL:", theme);

    return (
        // MUDANÇA 1: bg-primary removido daqui. Agora é bg-transparent.
        <div className='relative z-0 bg-transparent transition-colors duration-500 font-main overflow-x-hidden'>

            {/* --- CONTROLE DO FUNDO --- */}
            <div className="fixed inset-0 z-[-1] h-screen w-screen">
                {theme === 'space' ? (
                    <div className="w-full h-full bg-[#050816]">
                        <StarsCanvas />
                    </div>
                ) : (
                    // Se for gamer, renderiza apenas o vídeo (sem cor de fundo na frente)
                    <GamingVideoBackground />
                )}
            </div>

            {/* --- CONTEÚDO DO SITE --- */}
            <div className="relative z-10">
                <div>
                    <Navbar />
                    <Hero />
                </div>

                <About />
                <ComingSoon />
                <Works />
                <Experience />
                <Tech />

                <div className='flex flex-col items-center pb-10'>
                    <Contact />

                    <div className="mt-20 w-full max-w-7xl px-6">
                        <p className="text-secondary text-center text-sm uppercase tracking-wider mb-8">
                            Dashboard em Tempo Real
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                            <DiscordCard />
                            <SpotifyCard />
                            <QuoteCard />
                            <NasaCard />
                        </div>
                    </div>
                </div>
            </div>

            <footer className="py-5 text-center text-secondary text-sm bg-primary border-t border-white/10 relative z-10">
                <p>&copy; 2025 Vitor Lopes. Feito com React, Three.js & Tailwind.</p>
            </footer>
        </div>
    );
}

const App = () => {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <AppContent />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;