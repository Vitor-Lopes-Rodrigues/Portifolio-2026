import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GamingVideoBackground = () => {
    // 1. LISTA DE VÍDEOS (Coloque aqui os links ou arquivos locais)
    const videoList = [

        "https://gmedia.playstation.com/is/content/SIEPDC/global_pdc/en/games/pdps/l/la/the-last-of-us-part-ii/videos/the-last-of-us-part-ii-live-video-block-01-ps4-us-23sep19.mp4",

        "https://gmedia.playstation.com/is/content/SIEPDC/global_pdc/en/games/pdps/b/ba/battlefield-6/hero/battlefield-6-hero-desktop-01-en-18jul25.mp4",

        "https://gmedia.playstation.com/is/content/SIEPDC/global_pdc/en/games/pdps/c/ca/call-of-duty--black-ops-7/hero/call-of-duty-black-ops-7-animated-hero-mobile-01-en-11aug25.mp4"

    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // 2. LÓGICA DE TROCA (Timer)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                // Se chegou no último, volta para o zero (loop infinito)
                prevIndex === videoList.length - 1 ? 0 : prevIndex + 1
            );
        }, 9000); // <--- TEMPO: 7000ms = 7 segundos

        return () => clearInterval(interval);
    }, [videoList.length]);

    return (
        <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden bg-black">
            {/* Overlay escuro para leitura */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-20 pointer-events-none"></div>

            {/* AnimatePresence permite animar componentes quando eles SAEM da tela */}
            <AnimatePresence mode="popLayout">
                <motion.video
                    // A "key" é essencial: quando ela muda, o React sabe que é um novo vídeo
                    key={currentIndex}

                    // Definição da animação (Fade suave)
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }} // Demora 1.5s para trocar (suave)

                    src={videoList[currentIndex]}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-10"
                />
            </AnimatePresence>
        </div>
    );
};

export default GamingVideoBackground;