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

                {/*/!* Seção Sobre / Skills *!/*/}
                {/*<section id="about" className="py-20 px-10 max-w-7xl mx-auto text-center relative z-10">*/}
                {/*    <h2 className="text-4xl font-bold text-white mb-10">Tecnologias</h2>*/}
                {/*    <div className="flex flex-wrap justify-center gap-10">*/}
                {/*        {['React', 'Angular', 'C#', 'SQL', 'Docker', 'Kubernetes'].map(tech => (*/}
                {/*            <div key={tech} className="w-32 h-32 bg-tertiary rounded-full flex items-center justify-center shadow-card hover:scale-110 transition-transform cursor-pointer border border-white/10">*/}
                {/*                <span className="text-neon-cyan font-bold text-white">{tech}</span>*/}
                {/*            </div>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*</section>*/}

                <div className='relative z-0'>

                    <Contact />
                    <StarsCanvas />
                </div>
            </div>

            <footer className="py-5 text-center text-secondary text-sm bg-primary border-t border-white/10">
                <p>&copy; 2025 Vitor Lopes. Feito com React, Three.js & Tailwind.</p>
            </footer>

        </BrowserRouter>
    );
}

export default App;