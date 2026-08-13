import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, CheckCircle2 } from "lucide-react";
import Diploma from "../assets/images/Diploma.png";

const completedProjects = [
    {
        id: "tc2",
        title: "Pipeline de Dados — Indicador de Alfabetização",
        subtitle: "Tech Challenge Fase 2",
    },
    {
        id: "tc1",
        title: "Modelo Preditivo de NPS para E-commerce",
        subtitle: "Tech Challenge Fase 1",
    },
];

const ProjectStamp = ({ title, subtitle, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="flex items-start gap-3 bg-tertiary/50 border border-white/10 p-4 rounded-xl"
    >
        <CheckCircle2 className="text-green-400 shrink-0 mt-1" size={20} />
        <div>
            <p className="text-white font-bold text-sm md:text-base">{title}</p>
            <p className="text-secondary text-xs font-mono mt-1">{subtitle}</p>
        </div>
    </motion.div>
);

const ComingSoon = () => {
    return (
        <section className="py-10 px-6 max-w-4xl mx-auto relative z-10 my-20">
            {/* Container estilo "Terminal" com borda neon piscante */}
            <motion.div
                className="bg-black-100/80 backdrop-blur-sm border-2 border-neon-purple/50 p-6 md:p-8 rounded-2xl shadow-[0_0_20px_rgba(145,94,255,0.2)] relative"
                animate={{
                    boxShadow: ["0px 0px 20px rgba(145,94,255,0.2)", "0px 0px 10px rgba(145,94,255,0.1)", "0px 0px 20px rgba(145,94,255,0.2)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                {/* Título do Terminal */}
                <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                        <p className="text-cyan-400 font-mono text-sm tracking-[0.2em] uppercase animate-pulse">
                            &gt;&gt; Incoming Transmission...
                        </p>
                        <h3 className="text-white font-black text-2xl md:text-3xl mt-2">
                            Formação em <span className="text-neon-purple">Andamento</span>
                        </h3>
                    </div>
                    <div className="font-mono text-xs text-green-400 animate-pulse bg-green-400/10 px-4 py-1 rounded border border-green-400/30">
                        [STATUS: EM ANDAMENTO]
                    </div>
                </div>

                {/* Resumo direto do momento atual */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-2 rounded-lg bg-black-200 border border-white/10 text-neon-purple">
                        <BrainCircuit size={24} />
                    </div>
                    <p className="text-secondary text-sm md:text-base leading-relaxed">
                        Pós-graduando em <strong className="text-white">AI Scientist</strong> pela FIAP — cursando,
                        com 2 projetos aplicados entregues:
                    </p>
                </div>

                {/* Projetos concluídos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {completedProjects.map((project, index) => (
                        <ProjectStamp key={project.id} index={index} {...project} />
                    ))}
                </div>

                {/* Seção do Diploma */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col items-center justify-center border-t border-white/10 pt-8"
                >
                    <p className="text-cyan-400 font-mono text-sm mb-6 tracking-widest uppercase flex items-center gap-2">
                        <span className="animate-pulse">_</span> Arquivo Desbloqueado: Graduação
                    </p>

                    <div className="relative group cursor-pointer">
                        {/* Efeito de brilho atrás da imagem (Neon Glow) */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple to-cyan-400 rounded-lg blur opacity-25 group-hover:opacity-60 transition duration-500"></div>

                        {/* Imagem do Diploma */}
                        <img
                            src={Diploma}
                            alt="Diploma de Graduação"
                            className="relative rounded-lg border border-white/20 w-full max-w-md object-cover shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                    </div>

                    <p className="text-secondary text-center text-xs mt-6 font-mono">
                        Base de conhecimento atualizada com sucesso.
                    </p>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default ComingSoon;
