import React from "react";
import { motion } from "framer-motion";
import { technologies } from "../constants";

const HexagonCard = ({ index, name }) => {
    return (
        <div className="flex justify-center items-center w-28 h-28 sm:w-32 sm:h-32">
            {/* Container do movimento de flutuação */}
            <motion.div
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: index * 0.2,
                }}
                className="w-full h-full relative flex justify-center items-center group cursor-pointer"
            >
                {/* Camada da Borda (Gradient) */}
                <div className="absolute inset-0 hexagon-gradient w-full h-full">
                    {/* Camada interna (Conteúdo) */}
                    <div className="hexagon-shape w-full h-full flex flex-col justify-center items-center bg-tertiary/90">

                        {/* Ícone / Sigla com brilho neon ao passar o mouse */}
                        <h3 className="text-3xl font-bold text-white group-hover:text-neon-cyan transition-colors duration-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                            {name.substring(0, 2)}
                        </h3>

                        {/* Nome completo aparece sutilmente */}
                        <p className="text-[10px] text-secondary mt-1 tracking-widest uppercase group-hover:text-white transition-colors">
                            {name}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Tech = () => {
    return (
        <section className="py-20 flex flex-col items-center justify-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
            >
                <p className="text-neon-cyan font-mono text-sm tracking-[0.2em] uppercase mb-2">
                    &lt;System.Modules /&gt;
                </p>
                <h2 className="text-white font-black text-[40px] drop-shadow-[0_0_10px_rgba(145,94,255,0.5)]">
                    Stack Tecnológico
                </h2>
            </motion.div>

            {/* Grid de Tecnologias */}
            <div className="flex flex-wrap justify-center gap-8 max-w-5xl">
                {technologies.map((tech, index) => (
                    <HexagonCard key={tech.name} index={index} {...tech} />
                ))}
            </div>
        </section>
    );
};

export default Tech;