import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import StarsCanvas from './components/canvas/Stars';
import Tech from './components/Tech';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import ComingSoon from './components/ComingSoon';

// Importe os Widgets
import SpotifyCard from "./components/SpotifyCard";
import NasaCard from "./components/NasaCard"; // (Se você criou)
import DiscordCard from "./components/DiscordCard";
import QuoteCard from "./components/QuoteCard";

const App = () => {
    return (
        <BrowserRouter>
            <div className='relative z-0 bg-primary'>
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                    <Navbar />
                    <Hero />
                </div>

                <About />
                <ComingSoon />
                <Works />
                <Experience />
                <Tech />

                <div className='relative z-0 flex flex-col items-center pb-10'>
                    <Contact />

                    {/* --- ÁREA DE WIDGETS --- */}
                    <div className="mt-20 w-full max-w-7xl px-6">
                        <p className="text-secondary text-center text-sm uppercase tracking-wider mb-8">
                            Dashboard em Tempo Real
                        </p>

                        {/* Grid Responsivo para os Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                            <DiscordCard />
                            <SpotifyCard />
                            <QuoteCard />
                            <NasaCard />
                        </div>
                    </div>
                    {/* ----------------------- */}

                    <StarsCanvas />
                </div>
            </div>

            <footer className="py-5 text-center text-secondary text-sm bg-primary border-t border-white/10 relative z-10">
                <p>&copy; 2025 Vitor Lopes. Feito com React, Three.js & Tailwind.</p>
            </footer>

        </BrowserRouter>
    );
}

export default App;