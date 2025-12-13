import { motion } from "framer-motion";
import DynamicHero3D from "./canvas/DynamicHero3D";
// 1. Importe o hook do tema
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
    // 2. Use o tema
    const { theme } = useTheme();

    return (
        <section className="relative w-full h-screen mx-auto flex flex-col md:flex-row items-center justify-center overflow-hidden">
            <div className="flex flex-col justify-center items-start w-full md:w-1/2 px-6 md:px-16 z-10 pointer-events-none">
                <h1 className="text-5xl md:text-7xl font-bold text-white pointer-events-auto">
                    Oi, eu sou <span className="text-neon-purple">Vitor</span>
                </h1>
                <p className="mt-4 text-secondary text-[20px] max-w-lg leading-[30px] pointer-events-auto">
                    Full Stack Developer especializado em React, Angular, C# e arquitetura de sistemas escaláveis.
                </p>

                <div className="mt-8 flex gap-4 pointer-events-auto">
                    <a href="#projects" className="bg-neon-purple text-white py-3 px-8 rounded-full font-bold shadow-[0_0_15px_#915eff] hover:scale-105 transition-transform">
                        Ver Projetos
                    </a>
                    <a href="#contact" className="border border-white text-white py-3 px-8 rounded-full font-bold hover:bg-white hover:text-primary transition-colors">
                        Contato
                    </a>
                </div>
            </div>

            {/* 3. Renderização Condicional: Só mostra o 3D se for SPACE */}
            {theme === 'space' && (
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <DynamicHero3D />
                </div>
            )}


            {/* Scroll indicator */}
            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10 pointer-events-none'>
                <a href='#about' className="pointer-events-auto">
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{ y: [0, 24, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                            className='w-3 h-3 rounded-full bg-secondary mb-1'
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;